/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { NounsErc721 } from "../NounsErc721";

export class NounsErc721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsErc721> {
    return super.deploy(overrides || {}) as Promise<NounsErc721>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NounsErc721 {
    return super.attach(address) as NounsErc721;
  }
  connect(signer: Signer): NounsErc721__factory {
    return super.connect(signer) as NounsErc721__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsErc721 {
    return new Contract(address, _abi, signerOrProvider) as NounsErc721;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NounCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "createNoun",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f4e6f756e730000000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f4e4f554e5300000000000000000000000000000000000000000000000000000081525081600090805190602001906200009692919062000171565b508060019080519060200190620000af92919062000171565b5050506000620000c46200016960201b60201c565b905080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35062000286565b600033905090565b8280546200017f9062000221565b90600052602060002090601f016020900481019282620001a35760008555620001ef565b82601f10620001be57805160ff1916838001178555620001ef565b82800160010185558215620001ef579182015b82811115620001ee578251825591602001919060010190620001d1565b5b509050620001fe919062000202565b5090565b5b808211156200021d57600081600090555060010162000203565b5090565b600060028204905060018216806200023a57607f821691505b6020821081141562000251576200025062000257565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b612c1f80620002966000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063a22cb46511610071578063a22cb465146102a6578063b88d4fde146102c2578063c87b56dd146102de578063e985e9c51461030e578063f2fde38b1461033e5761010b565b8063715018a6146102425780638da5cb5b1461024c578063934d93a21461026a57806395d89b41146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611d23565b61035a565b6040516101379190612129565b60405180910390f35b61014861043c565b6040516101559190612144565b60405180910390f35b61017860048036038101906101739190611d75565b6104ce565b60405161018591906120c2565b60405180910390f35b6101a860048036038101906101a39190611ce7565b610553565b005b6101c460048036038101906101bf9190611be1565b61066b565b005b6101e060048036038101906101db9190611be1565b6106cb565b005b6101fc60048036038101906101f79190611d75565b6106eb565b60405161020991906120c2565b60405180910390f35b61022c60048036038101906102279190611b7c565b61079d565b6040516102399190612366565b60405180910390f35b61024a610855565b005b610254610992565b60405161026191906120c2565b60405180910390f35b6102726109bc565b60405161027f9190612366565b60405180910390f35b610290610a97565b60405161029d9190612144565b60405180910390f35b6102c060048036038101906102bb9190611cab565b610b29565b005b6102dc60048036038101906102d79190611c30565b610caa565b005b6102f860048036038101906102f39190611d75565b610d0c565b6040516103059190612144565b60405180910390f35b61032860048036038101906103239190611ba5565b610db3565b6040516103359190612129565b60405180910390f35b61035860048036038101906103539190611b7c565b610e47565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610435575061043482610ff3565b5b9050919050565b60606000805461044b9061258b565b80601f01602080910402602001604051908101604052809291908181526020018280546104779061258b565b80156104c45780601f10610499576101008083540402835291602001916104c4565b820191906000526020600020905b8154815290600101906020018083116104a757829003601f168201915b5050505050905090565b60006104d98261105d565b610518576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050f906122a6565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061055e826106eb565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c690612326565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105ee6110c9565b73ffffffffffffffffffffffffffffffffffffffff16148061061d575061061c816106176110c9565b610db3565b5b61065c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065390612226565b60405180910390fd5b61066683836110d1565b505050565b61067c6106766110c9565b8261118a565b6106bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b290612346565b60405180910390fd5b6106c6838383611268565b505050565b6106e683838360405180602001604052806000815250610caa565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078b90612266565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561080e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080590612246565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61085d6110c9565b73ffffffffffffffffffffffffffffffffffffffff1661087b610992565b73ffffffffffffffffffffffffffffffffffffffff16146108d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c8906122c6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006109c66110c9565b73ffffffffffffffffffffffffffffffffffffffff166109e4610992565b73ffffffffffffffffffffffffffffffffffffffff1614610a3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a31906122c6565b60405180910390fd5b6000610a4660076114c4565b9050610a5260076114d2565b610a63610a5d610992565b826114e8565b807f500276f57d63380e3c42ff9520054fa8200e8665da928e4553c8fa67d159087960405160405180910390a28091505090565b606060018054610aa69061258b565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad29061258b565b8015610b1f5780601f10610af457610100808354040283529160200191610b1f565b820191906000526020600020905b815481529060010190602001808311610b0257829003601f168201915b5050505050905090565b610b316110c9565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b96906121e6565b60405180910390fd5b8060056000610bac6110c9565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610c596110c9565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c9e9190612129565b60405180910390a35050565b610cbb610cb56110c9565b8361118a565b610cfa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf190612346565b60405180910390fd5b610d06848484846116b6565b50505050565b6060610d178261105d565b610d56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4d90612306565b60405180910390fd5b6000610d60611712565b90506000815111610d805760405180602001604052806000815250610dab565b80610d8a8461174f565b604051602001610d9b92919061209e565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610e4f6110c9565b73ffffffffffffffffffffffffffffffffffffffff16610e6d610992565b73ffffffffffffffffffffffffffffffffffffffff1614610ec3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eba906122c6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f2a90612186565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611144836106eb565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006111958261105d565b6111d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111cb90612206565b60405180910390fd5b60006111df836106eb565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061124e57508373ffffffffffffffffffffffffffffffffffffffff16611236846104ce565b73ffffffffffffffffffffffffffffffffffffffff16145b8061125f575061125e8185610db3565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611288826106eb565b73ffffffffffffffffffffffffffffffffffffffff16146112de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d5906122e6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561134e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611345906121c6565b60405180910390fd5b6113598383836118fc565b6113646000826110d1565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113b491906124a1565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461140b919061241a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611558576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154f90612286565b60405180910390fd5b6115618161105d565b156115a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611598906121a6565b60405180910390fd5b6115ad600083836118fc565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115fd919061241a565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6116c1848484611268565b6116cd84848484611901565b61170c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170390612166565b60405180910390fd5b50505050565b60606040518060400160405280600781526020017f697066733a2f2f00000000000000000000000000000000000000000000000000815250905090565b60606000821415611797576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506118f7565b600082905060005b600082146117c95780806117b2906125ee565b915050600a826117c29190612470565b915061179f565b60008167ffffffffffffffff81111561180b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561183d5781602001600182028036833780820191505090505b5090505b600085146118f05760018261185691906124a1565b9150600a856118659190612637565b6030611871919061241a565b60f81b8183815181106118ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856118e99190612470565b9450611841565b8093505050505b919050565b505050565b60006119228473ffffffffffffffffffffffffffffffffffffffff16611a98565b15611a8b578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261194b6110c9565b8786866040518563ffffffff1660e01b815260040161196d94939291906120dd565b602060405180830381600087803b15801561198757600080fd5b505af19250505080156119b857506040513d601f19601f820116820180604052508101906119b59190611d4c565b60015b611a3b573d80600081146119e8576040519150601f19603f3d011682016040523d82523d6000602084013e6119ed565b606091505b50600081511415611a33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a2a90612166565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611a90565b600190505b949350505050565b600080823b905060008111915050919050565b6000611abe611ab9846123a6565b612381565b905082815260208101848484011115611ad657600080fd5b611ae1848285612549565b509392505050565b600081359050611af881612b8d565b92915050565b600081359050611b0d81612ba4565b92915050565b600081359050611b2281612bbb565b92915050565b600081519050611b3781612bbb565b92915050565b600082601f830112611b4e57600080fd5b8135611b5e848260208601611aab565b91505092915050565b600081359050611b7681612bd2565b92915050565b600060208284031215611b8e57600080fd5b6000611b9c84828501611ae9565b91505092915050565b60008060408385031215611bb857600080fd5b6000611bc685828601611ae9565b9250506020611bd785828601611ae9565b9150509250929050565b600080600060608486031215611bf657600080fd5b6000611c0486828701611ae9565b9350506020611c1586828701611ae9565b9250506040611c2686828701611b67565b9150509250925092565b60008060008060808587031215611c4657600080fd5b6000611c5487828801611ae9565b9450506020611c6587828801611ae9565b9350506040611c7687828801611b67565b925050606085013567ffffffffffffffff811115611c9357600080fd5b611c9f87828801611b3d565b91505092959194509250565b60008060408385031215611cbe57600080fd5b6000611ccc85828601611ae9565b9250506020611cdd85828601611afe565b9150509250929050565b60008060408385031215611cfa57600080fd5b6000611d0885828601611ae9565b9250506020611d1985828601611b67565b9150509250929050565b600060208284031215611d3557600080fd5b6000611d4384828501611b13565b91505092915050565b600060208284031215611d5e57600080fd5b6000611d6c84828501611b28565b91505092915050565b600060208284031215611d8757600080fd5b6000611d9584828501611b67565b91505092915050565b611da7816124d5565b82525050565b611db6816124e7565b82525050565b6000611dc7826123d7565b611dd181856123ed565b9350611de1818560208601612558565b611dea81612724565b840191505092915050565b6000611e00826123e2565b611e0a81856123fe565b9350611e1a818560208601612558565b611e2381612724565b840191505092915050565b6000611e39826123e2565b611e43818561240f565b9350611e53818560208601612558565b80840191505092915050565b6000611e6c6032836123fe565b9150611e7782612735565b604082019050919050565b6000611e8f6026836123fe565b9150611e9a82612784565b604082019050919050565b6000611eb2601c836123fe565b9150611ebd826127d3565b602082019050919050565b6000611ed56024836123fe565b9150611ee0826127fc565b604082019050919050565b6000611ef86019836123fe565b9150611f038261284b565b602082019050919050565b6000611f1b602c836123fe565b9150611f2682612874565b604082019050919050565b6000611f3e6038836123fe565b9150611f49826128c3565b604082019050919050565b6000611f61602a836123fe565b9150611f6c82612912565b604082019050919050565b6000611f846029836123fe565b9150611f8f82612961565b604082019050919050565b6000611fa76020836123fe565b9150611fb2826129b0565b602082019050919050565b6000611fca602c836123fe565b9150611fd5826129d9565b604082019050919050565b6000611fed6020836123fe565b9150611ff882612a28565b602082019050919050565b60006120106029836123fe565b915061201b82612a51565b604082019050919050565b6000612033602f836123fe565b915061203e82612aa0565b604082019050919050565b60006120566021836123fe565b915061206182612aef565b604082019050919050565b60006120796031836123fe565b915061208482612b3e565b604082019050919050565b6120988161253f565b82525050565b60006120aa8285611e2e565b91506120b68284611e2e565b91508190509392505050565b60006020820190506120d76000830184611d9e565b92915050565b60006080820190506120f26000830187611d9e565b6120ff6020830186611d9e565b61210c604083018561208f565b818103606083015261211e8184611dbc565b905095945050505050565b600060208201905061213e6000830184611dad565b92915050565b6000602082019050818103600083015261215e8184611df5565b905092915050565b6000602082019050818103600083015261217f81611e5f565b9050919050565b6000602082019050818103600083015261219f81611e82565b9050919050565b600060208201905081810360008301526121bf81611ea5565b9050919050565b600060208201905081810360008301526121df81611ec8565b9050919050565b600060208201905081810360008301526121ff81611eeb565b9050919050565b6000602082019050818103600083015261221f81611f0e565b9050919050565b6000602082019050818103600083015261223f81611f31565b9050919050565b6000602082019050818103600083015261225f81611f54565b9050919050565b6000602082019050818103600083015261227f81611f77565b9050919050565b6000602082019050818103600083015261229f81611f9a565b9050919050565b600060208201905081810360008301526122bf81611fbd565b9050919050565b600060208201905081810360008301526122df81611fe0565b9050919050565b600060208201905081810360008301526122ff81612003565b9050919050565b6000602082019050818103600083015261231f81612026565b9050919050565b6000602082019050818103600083015261233f81612049565b9050919050565b6000602082019050818103600083015261235f8161206c565b9050919050565b600060208201905061237b600083018461208f565b92915050565b600061238b61239c565b905061239782826125bd565b919050565b6000604051905090565b600067ffffffffffffffff8211156123c1576123c06126f5565b5b6123ca82612724565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006124258261253f565b91506124308361253f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561246557612464612668565b5b828201905092915050565b600061247b8261253f565b91506124868361253f565b92508261249657612495612697565b5b828204905092915050565b60006124ac8261253f565b91506124b78361253f565b9250828210156124ca576124c9612668565b5b828203905092915050565b60006124e08261251f565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561257657808201518184015260208101905061255b565b83811115612585576000848401525b50505050565b600060028204905060018216806125a357607f821691505b602082108114156125b7576125b66126c6565b5b50919050565b6125c682612724565b810181811067ffffffffffffffff821117156125e5576125e46126f5565b5b80604052505050565b60006125f98261253f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561262c5761262b612668565b5b600182019050919050565b60006126428261253f565b915061264d8361253f565b92508261265d5761265c612697565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612b96816124d5565b8114612ba157600080fd5b50565b612bad816124e7565b8114612bb857600080fd5b50565b612bc4816124f3565b8114612bcf57600080fd5b50565b612bdb8161253f565b8114612be657600080fd5b5056fea26469706673582212209768d56a168998b97236480bcdab5c90aaf0231dfa08ea6209ca79fc56a089e664736f6c63430008040033";
