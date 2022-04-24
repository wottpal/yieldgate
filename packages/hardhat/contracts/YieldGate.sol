//SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import {IAToken} from "@aave/core-v3/contracts/interfaces/IAToken.sol";
import {IWETHGateway} from "@aave/periphery-v3/contracts/misc/interfaces/IWETHGateway.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

contract YieldGate {
    address immutable beneficiaryPoolLib;
    address immutable pool;
    address immutable wethgw;
    address immutable token;

    // beneficiary => BeneficiaryPool
    mapping(address => BeneficiaryPool) public beneficiaryPools;

    constructor(address _pool, address wethGateway, address aWETH) {
        pool = _pool;
        wethgw = wethGateway;
        token = aWETH;

        beneficiaryPoolLib = address(new BeneficiaryPool());
    }

    function stake(address beneficiary) public payable {
        address bpool = getOrDeployPool(beneficiary);
        BeneficiaryPool(bpool).stake{value: msg.value}(msg.sender);
    }

    function unstake(address beneficiary) public {
        address bpool = getOrDeployPool(beneficiary);
        BeneficiaryPool(bpool).unstake(payable(msg.sender));
    }

    function claim() public {
        beneficiaryPools[msg.sender].claim();
    }

    function getOrDeployPool(address beneficiary) public returns (address) {
        address bpool = address(beneficiaryPools[beneficiary]);
        if (bpool != address(0)) {
            return bpool;
        }
        return deployPool(beneficiary);
    }

    function deployPool(address beneficiary) internal returns (address) {
        BeneficiaryPool bpool = BeneficiaryPool(
            Clones.clone(beneficiaryPoolLib)
        );
        bpool.init(pool, wethgw, token, beneficiary);
        beneficiaryPools[beneficiary] = bpool;
        return address(bpool);
    }

    // claimable returns the total earned ether by the provided beneficiary.
    // It is the accrued interest on all staked ether.
    // It can be withdrawn by the beneficiary with claim.
    function claimable(address beneficiary) public view returns (uint256) {
        BeneficiaryPool bpool =  beneficiaryPools[beneficiary];
        if (address(bpool) == address(0)) {
            return 0;
        }
        return bpool.claimable();
    }

    // staked returns the total staked ether on behalf of the beneficiary.
    function staked(address beneficiary) public view returns (uint256) {
        BeneficiaryPool bpool =  beneficiaryPools[beneficiary];
        if (address(bpool) == address(0)) {
            return 0;
        }
        return bpool.staked();
    }

    function supporterStaked(address supporter, address beneficiary)
    public view returns (uint256)
    {
        BeneficiaryPool bpool =  beneficiaryPools[beneficiary];
        if (address(bpool) == address(0)) {
            return 0;
        }
        return bpool.supporters(supporter);
    }
}

contract BeneficiaryPool {
    event Staked(address indexed beneficiary, address indexed supporter, uint amount);
    event Unstaked(address indexed beneficiary, address indexed supporter, uint amount);
    event Claimed(address indexed beneficiary, uint amount);

    address pool;
    IWETHGateway wethgw;
    IAToken token;
    address beneficiary;

    // supporter => amount
    mapping(address => uint256) public supporters;
    // total staked amount
    uint internal totalStake;

    function init(
        address _pool,
        address _wethgw,
        address _token,
        address _beneficiary
    ) public {
        require(beneficiary == address(0), "already initialized");

        pool = _pool;
        wethgw = IWETHGateway(_wethgw);
        token = IAToken(_token);
        beneficiary = _beneficiary;
    }

    // Stakes the sent ether, registering the caller as a supporter.
    function stake(address supporter) public payable {
        uint amount = msg.value;
        supporters[supporter] += amount;
        totalStake += amount;

        wethgw.depositETH{value: amount}(pool, address(this), 0);
        emit Staked(beneficiary, supporter, amount);
    }

    // Unstakes all previously staked ether by the calling supporter.
    // The beneficiary keeps all generated yield.
    function unstake(address payable supporter) public {
        uint256 sstake = supporters[supporter];
        supporters[supporter] = 0;
        totalStake -= sstake;

        withdraw(sstake, supporter);
        emit Unstaked(beneficiary, supporter, sstake);
    }

    // claim sends the accrued interest to the beneficiary of this pool. The
    // stake remains at the yield pool and continues generating yield.
    function claim() public {
        uint amount = claimable();
        withdraw(amount, beneficiary);
        emit Claimed(beneficiary, amount);
    }

    function withdraw(uint amount, address receiver) internal {
        require(token.approve(address(wethgw), amount), "ethgw approval failed");
        wethgw.withdrawETH(pool, amount, receiver);
    }

    // claimable returns the total earned ether by the provided beneficiary.
    // It is the accrued interest on all staked ether.
    // It can be withdrawn by the beneficiary with claim.
    function claimable() public view returns (uint256) {
        return token.balanceOf(address(this)) - staked();
    }

    // staked returns the total staked ether by this beneficiary pool.
    function staked() public view returns (uint256) {
        return totalStake;
    }
}
