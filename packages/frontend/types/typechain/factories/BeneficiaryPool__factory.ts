/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BeneficiaryPool,
  BeneficiaryPoolInterface,
} from "../BeneficiaryPool";

const _abi = [
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wethgw",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "supporter",
        type: "address",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "staked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "supporters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "supporter",
        type: "address",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506111dc806100206000396000f3fe6080604052600436106100705760003560e01c80634e71d92d1161004e5780634e71d92d146100e5578063647c75e2146100fc578063d6f1926214610139578063f2888dbb1461016457610070565b806306552ff3146100755780630b76619b1461009e57806326476204146100c9575b600080fd5b34801561008157600080fd5b5061009c60048036038101906100979190610b9a565b61018d565b005b3480156100aa57600080fd5b506100b361034b565b6040516100c09190610c1a565b60405180910390f35b6100e360048036038101906100de9190610c35565b6103bb565b005b3480156100f157600080fd5b506100fa610528565b005b34801561010857600080fd5b50610123600480360381019061011e9190610c35565b610569565b6040516101309190610c1a565b60405180910390f35b34801561014557600080fd5b5061014e610581565b60405161015b9190610c1a565b60405180910390f35b34801561017057600080fd5b5061018b60048036038101906101869190610ca0565b6105f1565b005b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461021e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161021590610d2a565b60405180910390fd5b61024260405180606001604052806038815260200161116f60389139858584610892565b836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b600080600090506103b46040518060400160405280601781526020017f546f74616c207374616b656420666f722025733a202573000000000000000000815250600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683610934565b8091505090565b61041d6040518060400160405280601181526020017f5374616b696e6720257320666f7220257300000000000000000000000000000081525034600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166109d3565b34600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461046c9190610d79565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663474cf53d60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff163060006040518463ffffffff1660e01b81526004016104f393929190610e31565b600060405180830381600087803b15801561050d57600080fd5b505af1158015610521573d6000803e3d6000fd5b5050505050565b6105676040518060400160405280600f81526020017f436c61696d696e6720666f72202573000000000000000000000000000000000081525033610a72565b565b60046020528060005260406000206000915090505481565b600080600090506105ea6040518060400160405280601081526020017f4561726e65642062792025733a20257300000000000000000000000000000000815250600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683610934565b8091505090565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506106976040518060400160405280601381526020017f556e7374616b696e6720257320666f722025730000000000000000000000000081525082600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166109d3565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b815260040161075b929190610e68565b6020604051808303816000875af115801561077a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079e9190610ec9565b6107dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d490610f42565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166380500d2060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683856040518463ffffffff1660e01b815260040161085c93929190610fb7565b600060405180830381600087803b15801561087657600080fd5b505af115801561088a573d6000803e3d6000fd5b505050505050565b61092e848484846040516024016108ac9493929190611076565b6040516020818303038152906040527fed8f28f6000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b0e565b50505050565b6109ce83838360405160240161094c939291906110c2565b6040516020818303038152906040527f07c81217000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b0e565b505050565b610a6d8383836040516024016109eb93929190611100565b6040516020818303038152906040527fe3849f79000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b0e565b505050565b610b0a8282604051602401610a8892919061113e565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b0e565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b6782610b3c565b9050919050565b610b7781610b5c565b8114610b8257600080fd5b50565b600081359050610b9481610b6e565b92915050565b60008060008060808587031215610bb457610bb3610b37565b5b6000610bc287828801610b85565b9450506020610bd387828801610b85565b9350506040610be487828801610b85565b9250506060610bf587828801610b85565b91505092959194509250565b6000819050919050565b610c1481610c01565b82525050565b6000602082019050610c2f6000830184610c0b565b92915050565b600060208284031215610c4b57610c4a610b37565b5b6000610c5984828501610b85565b91505092915050565b6000610c6d82610b3c565b9050919050565b610c7d81610c62565b8114610c8857600080fd5b50565b600081359050610c9a81610c74565b92915050565b600060208284031215610cb657610cb5610b37565b5b6000610cc484828501610c8b565b91505092915050565b600082825260208201905092915050565b7f616c726561647920696e697469616c697a656400000000000000000000000000600082015250565b6000610d14601383610ccd565b9150610d1f82610cde565b602082019050919050565b60006020820190508181036000830152610d4381610d07565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d8482610c01565b9150610d8f83610c01565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610dc457610dc3610d4a565b5b828201905092915050565b610dd881610b5c565b82525050565b6000819050919050565b600061ffff82169050919050565b6000819050919050565b6000610e1b610e16610e1184610dde565b610df6565b610de8565b9050919050565b610e2b81610e00565b82525050565b6000606082019050610e466000830186610dcf565b610e536020830185610dcf565b610e606040830184610e22565b949350505050565b6000604082019050610e7d6000830185610dcf565b610e8a6020830184610c0b565b9392505050565b60008115159050919050565b610ea681610e91565b8114610eb157600080fd5b50565b600081519050610ec381610e9d565b92915050565b600060208284031215610edf57610ede610b37565b5b6000610eed84828501610eb4565b91505092915050565b7f657468677720617070726f76616c206661696c65640000000000000000000000600082015250565b6000610f2c601583610ccd565b9150610f3782610ef6565b602082019050919050565b60006020820190508181036000830152610f5b81610f1f565b9050919050565b6000610f7d610f78610f7384610b3c565b610df6565b610b3c565b9050919050565b6000610f8f82610f62565b9050919050565b6000610fa182610f84565b9050919050565b610fb181610f96565b82525050565b6000606082019050610fcc6000830186610dcf565b610fd96020830185610c0b565b610fe66040830184610fa8565b949350505050565b600081519050919050565b60005b83811015611017578082015181840152602081019050610ffc565b83811115611026576000848401525b50505050565b6000601f19601f8301169050919050565b600061104882610fee565b6110528185610ccd565b9350611062818560208601610ff9565b61106b8161102c565b840191505092915050565b60006080820190508181036000830152611090818761103d565b905061109f6020830186610dcf565b6110ac6040830185610dcf565b6110b96060830184610dcf565b95945050505050565b600060608201905081810360008301526110dc818661103d565b90506110eb6020830185610dcf565b6110f86040830184610c0b565b949350505050565b6000606082019050818103600083015261111a818661103d565b90506111296020830185610c0b565b6111366040830184610dcf565b949350505050565b60006040820190508181036000830152611158818561103d565b90506111676020830184610dcf565b939250505056fe4465706c6f79696e672042656e6566696369617279506f6f6c207769746820706f6f6c2025732c2077455448677720257320666f72202573a264697066735822122002d11e4009efeba70f1e006a7204e11313f02c07503c0573bc9e58c6e84eec4d64736f6c634300080a0033";

export class BeneficiaryPool__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BeneficiaryPool> {
    return super.deploy(overrides || {}) as Promise<BeneficiaryPool>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BeneficiaryPool {
    return super.attach(address) as BeneficiaryPool;
  }
  connect(signer: Signer): BeneficiaryPool__factory {
    return super.connect(signer) as BeneficiaryPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BeneficiaryPoolInterface {
    return new utils.Interface(_abi) as BeneficiaryPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeneficiaryPool {
    return new Contract(address, _abi, signerOrProvider) as BeneficiaryPool;
  }
}
