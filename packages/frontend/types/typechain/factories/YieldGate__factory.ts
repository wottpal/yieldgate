/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { YieldGate, YieldGateInterface } from "../YieldGate";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "wethGateway",
        type: "address",
      },
      {
        internalType: "address",
        name: "aWETH",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "beneficiaryPools",
    outputs: [
      {
        internalType: "contract BeneficiaryPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "claimable",
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
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getOrDeployPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
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
        name: "supporter",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "supporterStaked",
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
        name: "beneficiary",
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
  "0x6101006040523480156200001257600080fd5b5060405162001d0038038062001d008339818101604052810190620000389190620001b4565b8273ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff1681525050604051620000e2906200013c565b604051809103906000f080158015620000ff573d6000803e3d6000fd5b5073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050505062000210565b610d1e8062000fe283390190565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200017c826200014f565b9050919050565b6200018e816200016f565b81146200019a57600080fd5b50565b600081519050620001ae8162000183565b92915050565b600080600060608486031215620001d057620001cf6200014a565b5b6000620001e0868287016200019d565b9350506020620001f3868287016200019d565b925050604062000206868287016200019d565b9150509250925092565b60805160a05160c05160e051610d986200024a60003960006108970152600061087601526000610855015260006108110152610d986000f3fe60806040526004361061007b5760003560e01c806398807d841161004e57806398807d841461012d578063a8401be51461016a578063bfb689c3146101a7578063f2888dbb146101e45761007b565b80632647620414610080578063402914f51461009c5780634e71d92d146100d9578063956d67c6146100f0575b600080fd5b61009a60048036038101906100959190610ac6565b61020d565b005b3480156100a857600080fd5b506100c360048036038101906100be9190610ac6565b61028a565b6040516100d09190610b0c565b60405180910390f35b3480156100e557600080fd5b506100ee6103a5565b005b3480156100fc57600080fd5b5061011760048036038101906101129190610ac6565b610465565b6040516101249190610b86565b60405180910390f35b34801561013957600080fd5b50610154600480360381019061014f9190610ac6565b610498565b6040516101619190610b0c565b60405180910390f35b34801561017657600080fd5b50610191600480360381019061018c9190610ac6565b6105b3565b60405161019e9190610bb0565b60405180910390f35b3480156101b357600080fd5b506101ce60048036038101906101c99190610bcb565b610666565b6040516101db9190610b0c565b60405180910390f35b3480156101f057600080fd5b5061020b60048036038101906102069190610ac6565b61078d565b005b6000610218826105b3565b90508073ffffffffffffffffffffffffffffffffffffffff16632647620434336040518363ffffffff1660e01b81526004016102549190610bb0565b6000604051808303818588803b15801561026d57600080fd5b505af1158015610281573d6000803e3d6000fd5b50505050505050565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561032d5760009150506103a0565b8073ffffffffffffffffffffffffffffffffffffffff1663af38d7576040518163ffffffff1660e01b8152600401602060405180830381865afa158015610378573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039c9190610c37565b9150505b919050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634e71d92d6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561044b57600080fd5b505af115801561045f573d6000803e3d6000fd5b50505050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561053b5760009150506105ae565b8073ffffffffffffffffffffffffffffffffffffffff16630b76619b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610586573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105aa9190610c37565b9150505b919050565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106545780915050610661565b61065d83610809565b9150505b919050565b6000806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610709576000915050610787565b8073ffffffffffffffffffffffffffffffffffffffff1663647c75e2856040518263ffffffff1660e01b81526004016107429190610bb0565b602060405180830381865afa15801561075f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107839190610c37565b9150505b92915050565b6000610798826105b3565b90508073ffffffffffffffffffffffffffffffffffffffff1663f2888dbb336040518263ffffffff1660e01b81526004016107d39190610c85565b600060405180830381600087803b1580156107ed57600080fd5b505af1158015610801573d6000803e3d6000fd5b505050505050565b6000806108357f000000000000000000000000000000000000000000000000000000000000000061098e565b90508073ffffffffffffffffffffffffffffffffffffffff166306552ff37f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000876040518563ffffffff1660e01b81526004016108d69493929190610ca0565b600060405180830381600087803b1580156108f057600080fd5b505af1158015610904573d6000803e3d6000fd5b50505050806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080915050919050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5590610d42565b60405180910390fd5b919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a9382610a68565b9050919050565b610aa381610a88565b8114610aae57600080fd5b50565b600081359050610ac081610a9a565b92915050565b600060208284031215610adc57610adb610a63565b5b6000610aea84828501610ab1565b91505092915050565b6000819050919050565b610b0681610af3565b82525050565b6000602082019050610b216000830184610afd565b92915050565b6000819050919050565b6000610b4c610b47610b4284610a68565b610b27565b610a68565b9050919050565b6000610b5e82610b31565b9050919050565b6000610b7082610b53565b9050919050565b610b8081610b65565b82525050565b6000602082019050610b9b6000830184610b77565b92915050565b610baa81610a88565b82525050565b6000602082019050610bc56000830184610ba1565b92915050565b60008060408385031215610be257610be1610a63565b5b6000610bf085828601610ab1565b9250506020610c0185828601610ab1565b9150509250929050565b610c1481610af3565b8114610c1f57600080fd5b50565b600081519050610c3181610c0b565b92915050565b600060208284031215610c4d57610c4c610a63565b5b6000610c5b84828501610c22565b91505092915050565b6000610c6f82610a68565b9050919050565b610c7f81610c64565b82525050565b6000602082019050610c9a6000830184610c76565b92915050565b6000608082019050610cb56000830187610ba1565b610cc26020830186610ba1565b610ccf6040830185610ba1565b610cdc6060830184610ba1565b95945050505050565b600082825260208201905092915050565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b6000610d2c601683610ce5565b9150610d3782610cf6565b602082019050919050565b60006020820190508181036000830152610d5b81610d1f565b905091905056fea264697066735822122005b7cd3d9957911ac084d0b07fc27b400630a9dc4d1ab31a41976746a3ada55064736f6c634300080a0033608060405234801561001057600080fd5b50610cfe806100206000396000f3fe6080604052600436106100705760003560e01c80634e71d92d1161004e5780634e71d92d146100e5578063647c75e2146100fc578063af38d75714610139578063f2888dbb1461016457610070565b806306552ff3146100755780630b76619b1461009e57806326476204146100c9575b600080fd5b34801561008157600080fd5b5061009c60048036038101906100979190610821565b61018d565b005b3480156100aa57600080fd5b506100b3610327565b6040516100c091906108a1565b60405180910390f35b6100e360048036038101906100de91906108bc565b610331565b005b3480156100f157600080fd5b506100fa610456565b005b34801561010857600080fd5b50610123600480360381019061011e91906108bc565b61048b565b60405161013091906108a1565b60405180910390f35b34801561014557600080fd5b5061014e6104a3565b60405161015b91906108a1565b60405180910390f35b34801561017057600080fd5b5061018b60048036038101906101869190610927565b610558565b005b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461021e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610215906109b1565b60405180910390fd5b836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6000600554905090565b34600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103809190610a00565b9250508190555034600560008282546103999190610a00565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663474cf53d3460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff163060006040518563ffffffff1660e01b815260040161042193929190610ab8565b6000604051808303818588803b15801561043a57600080fd5b505af115801561044e573d6000803e3d6000fd5b505050505050565b6104896104616104a3565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610608565b565b60046020528060005260406000206000915090505481565b60006104ad610327565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105089190610aef565b602060405180830381865afa158015610525573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105499190610b36565b6105539190610b63565b905090565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600560008282546105f39190610b63565b925050819055506106048183610608565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b8152600401610687929190610b97565b6020604051808303816000875af11580156106a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ca9190610bf8565b610709576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070090610c71565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166380500d2060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846040518463ffffffff1660e01b815260040161078893929190610c91565b600060405180830381600087803b1580156107a257600080fd5b505af11580156107b6573d6000803e3d6000fd5b505050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107ee826107c3565b9050919050565b6107fe816107e3565b811461080957600080fd5b50565b60008135905061081b816107f5565b92915050565b6000806000806080858703121561083b5761083a6107be565b5b60006108498782880161080c565b945050602061085a8782880161080c565b935050604061086b8782880161080c565b925050606061087c8782880161080c565b91505092959194509250565b6000819050919050565b61089b81610888565b82525050565b60006020820190506108b66000830184610892565b92915050565b6000602082840312156108d2576108d16107be565b5b60006108e08482850161080c565b91505092915050565b60006108f4826107c3565b9050919050565b610904816108e9565b811461090f57600080fd5b50565b600081359050610921816108fb565b92915050565b60006020828403121561093d5761093c6107be565b5b600061094b84828501610912565b91505092915050565b600082825260208201905092915050565b7f616c726561647920696e697469616c697a656400000000000000000000000000600082015250565b600061099b601383610954565b91506109a682610965565b602082019050919050565b600060208201905081810360008301526109ca8161098e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a0b82610888565b9150610a1683610888565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a4b57610a4a6109d1565b5b828201905092915050565b610a5f816107e3565b82525050565b6000819050919050565b600061ffff82169050919050565b6000819050919050565b6000610aa2610a9d610a9884610a65565b610a7d565b610a6f565b9050919050565b610ab281610a87565b82525050565b6000606082019050610acd6000830186610a56565b610ada6020830185610a56565b610ae76040830184610aa9565b949350505050565b6000602082019050610b046000830184610a56565b92915050565b610b1381610888565b8114610b1e57600080fd5b50565b600081519050610b3081610b0a565b92915050565b600060208284031215610b4c57610b4b6107be565b5b6000610b5a84828501610b21565b91505092915050565b6000610b6e82610888565b9150610b7983610888565b925082821015610b8c57610b8b6109d1565b5b828203905092915050565b6000604082019050610bac6000830185610a56565b610bb96020830184610892565b9392505050565b60008115159050919050565b610bd581610bc0565b8114610be057600080fd5b50565b600081519050610bf281610bcc565b92915050565b600060208284031215610c0e57610c0d6107be565b5b6000610c1c84828501610be3565b91505092915050565b7f657468677720617070726f76616c206661696c65640000000000000000000000600082015250565b6000610c5b601583610954565b9150610c6682610c25565b602082019050919050565b60006020820190508181036000830152610c8a81610c4e565b9050919050565b6000606082019050610ca66000830186610a56565b610cb36020830185610892565b610cc06040830184610a56565b94935050505056fea264697066735822122058de5cbff5e918f0127bab1990097a646ed47f49e0fd0e24930599109a24250664736f6c634300080a0033";

export class YieldGate__factory extends ContractFactory {
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
    _pool: string,
    wethGateway: string,
    aWETH: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YieldGate> {
    return super.deploy(
      _pool,
      wethGateway,
      aWETH,
      overrides || {}
    ) as Promise<YieldGate>;
  }
  getDeployTransaction(
    _pool: string,
    wethGateway: string,
    aWETH: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _pool,
      wethGateway,
      aWETH,
      overrides || {}
    );
  }
  attach(address: string): YieldGate {
    return super.attach(address) as YieldGate;
  }
  connect(signer: Signer): YieldGate__factory {
    return super.connect(signer) as YieldGate__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YieldGateInterface {
    return new utils.Interface(_abi) as YieldGateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YieldGate {
    return new Contract(address, _abi, signerOrProvider) as YieldGate;
  }
}
