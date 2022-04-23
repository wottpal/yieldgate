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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
  "0x608060405234801561001057600080fd5b50610cfe806100206000396000f3fe6080604052600436106100705760003560e01c80634e71d92d1161004e5780634e71d92d146100e5578063647c75e2146100fc578063af38d75714610139578063f2888dbb1461016457610070565b806306552ff3146100755780630b76619b1461009e57806326476204146100c9575b600080fd5b34801561008157600080fd5b5061009c60048036038101906100979190610821565b61018d565b005b3480156100aa57600080fd5b506100b3610327565b6040516100c091906108a1565b60405180910390f35b6100e360048036038101906100de91906108bc565b610331565b005b3480156100f157600080fd5b506100fa610456565b005b34801561010857600080fd5b50610123600480360381019061011e91906108bc565b61048b565b60405161013091906108a1565b60405180910390f35b34801561014557600080fd5b5061014e6104a3565b60405161015b91906108a1565b60405180910390f35b34801561017057600080fd5b5061018b60048036038101906101869190610927565b610558565b005b600073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461021e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610215906109b1565b60405180910390fd5b836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6000600554905090565b34600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103809190610a00565b9250508190555034600560008282546103999190610a00565b92505081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663474cf53d3460008054906101000a900473ffffffffffffffffffffffffffffffffffffffff163060006040518563ffffffff1660e01b815260040161042193929190610ab8565b6000604051808303818588803b15801561043a57600080fd5b505af115801561044e573d6000803e3d6000fd5b505050505050565b6104896104616104a3565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610608565b565b60046020528060005260406000206000915090505481565b60006104ad610327565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105089190610aef565b602060405180830381865afa158015610525573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105499190610b36565b6105539190610b63565b905090565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600560008282546105f39190610b63565b925050819055506106048183610608565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b8152600401610687929190610b97565b6020604051808303816000875af11580156106a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ca9190610bf8565b610709576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070090610c71565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166380500d2060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684846040518463ffffffff1660e01b815260040161078893929190610c91565b600060405180830381600087803b1580156107a257600080fd5b505af11580156107b6573d6000803e3d6000fd5b505050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107ee826107c3565b9050919050565b6107fe816107e3565b811461080957600080fd5b50565b60008135905061081b816107f5565b92915050565b6000806000806080858703121561083b5761083a6107be565b5b60006108498782880161080c565b945050602061085a8782880161080c565b935050604061086b8782880161080c565b925050606061087c8782880161080c565b91505092959194509250565b6000819050919050565b61089b81610888565b82525050565b60006020820190506108b66000830184610892565b92915050565b6000602082840312156108d2576108d16107be565b5b60006108e08482850161080c565b91505092915050565b60006108f4826107c3565b9050919050565b610904816108e9565b811461090f57600080fd5b50565b600081359050610921816108fb565b92915050565b60006020828403121561093d5761093c6107be565b5b600061094b84828501610912565b91505092915050565b600082825260208201905092915050565b7f616c726561647920696e697469616c697a656400000000000000000000000000600082015250565b600061099b601383610954565b91506109a682610965565b602082019050919050565b600060208201905081810360008301526109ca8161098e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a0b82610888565b9150610a1683610888565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a4b57610a4a6109d1565b5b828201905092915050565b610a5f816107e3565b82525050565b6000819050919050565b600061ffff82169050919050565b6000819050919050565b6000610aa2610a9d610a9884610a65565b610a7d565b610a6f565b9050919050565b610ab281610a87565b82525050565b6000606082019050610acd6000830186610a56565b610ada6020830185610a56565b610ae76040830184610aa9565b949350505050565b6000602082019050610b046000830184610a56565b92915050565b610b1381610888565b8114610b1e57600080fd5b50565b600081519050610b3081610b0a565b92915050565b600060208284031215610b4c57610b4b6107be565b5b6000610b5a84828501610b21565b91505092915050565b6000610b6e82610888565b9150610b7983610888565b925082821015610b8c57610b8b6109d1565b5b828203905092915050565b6000604082019050610bac6000830185610a56565b610bb96020830184610892565b9392505050565b60008115159050919050565b610bd581610bc0565b8114610be057600080fd5b50565b600081519050610bf281610bcc565b92915050565b600060208284031215610c0e57610c0d6107be565b5b6000610c1c84828501610be3565b91505092915050565b7f657468677720617070726f76616c206661696c65640000000000000000000000600082015250565b6000610c5b601583610954565b9150610c6682610c25565b602082019050919050565b60006020820190508181036000830152610c8a81610c4e565b9050919050565b6000606082019050610ca66000830186610a56565b610cb36020830185610892565b610cc06040830184610a56565b94935050505056fea264697066735822122058de5cbff5e918f0127bab1990097a646ed47f49e0fd0e24930599109a24250664736f6c634300080a0033";

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
