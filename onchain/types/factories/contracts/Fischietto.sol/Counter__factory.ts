/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Counter,
  CounterInterface,
} from "../../../contracts/Fischietto.sol/Counter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [],
    name: "SignerNotMessageSender",
    type: "error",
  },
  {
    inputs: [],
    name: "SignerNotOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct inEuint32",
        name: "encryptedValue",
        type: "tuple",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCounter",
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
        components: [
          {
            internalType: "bytes32",
            name: "publicKey",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Permission",
        name: "permission",
        type: "tuple",
      },
    ],
    name: "getCounterPermit",
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
        components: [
          {
            internalType: "bytes32",
            name: "publicKey",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct Permission",
        name: "permission",
        type: "tuple",
      },
    ],
    name: "getCounterPermitSealed",
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
] as const;

const _bytecode =
  "0x61016060405234801561001157600080fd5b506040518060400160405280601181526020017f4668656e6978205065726d697373696f6e0000000000000000000000000000008152506040518060400160405280600381526020017f312e30000000000000000000000000000000000000000000000000000000000081525061009260008361016e60201b90919060201c565b61012081815250506100ae60018261016e60201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a081815250506100eb6101be60201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107a7565b6000602083511015610190576101898361021960201b60201c565b90506101b8565b826101a08361028160201b60201c565b60000190816101af91906104db565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e0516101005146306040516020016101fe959493929190610616565b60405160208183030381529060405280519060200120905090565b600080829050601f8151111561026657826040517f305a27a900000000000000000000000000000000000000000000000000000000815260040161025d91906106ee565b60405180910390fd5b80518161027290610740565b60001c1760001b915050919050565b6000819050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061030c57607f821691505b60208210810361031f5761031e6102c5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026103877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261034a565b610391868361034a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006103d86103d36103ce846103a9565b6103b3565b6103a9565b9050919050565b6000819050919050565b6103f2836103bd565b6104066103fe826103df565b848454610357565b825550505050565b600090565b61041b61040e565b6104268184846103e9565b505050565b5b8181101561044a5761043f600082610413565b60018101905061042c565b5050565b601f82111561048f5761046081610325565b6104698461033a565b81016020851015610478578190505b61048c6104848561033a565b83018261042b565b50505b505050565b600082821c905092915050565b60006104b260001984600802610494565b1980831691505092915050565b60006104cb83836104a1565b9150826002028217905092915050565b6104e48261028b565b67ffffffffffffffff8111156104fd576104fc610296565b5b61050782546102f4565b61051282828561044e565b600060209050601f8311600181146105455760008415610533578287015190505b61053d85826104bf565b8655506105a5565b601f19841661055386610325565b60005b8281101561057b57848901518255600182019150602085019450602081019050610556565b868310156105985784890151610594601f8916826104a1565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b6105c0816105ad565b82525050565b6105cf816103a9565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610600826105d5565b9050919050565b610610816105f5565b82525050565b600060a08201905061062b60008301886105b7565b61063860208301876105b7565b61064560408301866105b7565b61065260608301856105c6565b61065f6080830184610607565b9695505050505050565b600082825260208201905092915050565b60005b8381101561069857808201518184015260208101905061067d565b60008484015250505050565b6000601f19601f8301169050919050565b60006106c08261028b565b6106ca8185610669565b93506106da81856020860161067a565b6106e3816106a4565b840191505092915050565b6000602082019050818103600083015261070881846106b5565b905092915050565b600081519050919050565b6000819050602082019050919050565b600061073782516105ad565b80915050919050565b600061074b82610710565b826107558461071b565b90506107608161072b565b925060208210156107a05761079b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080261034a565b831692505b5050919050565b60805160a05160c05160e051610100516101205161014051611a50610801600039600061057f0152600061054401526000610b8901526000610b68015260006106150152600061066b015260006106940152611a506000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80635ef89f331461006757806384b0196e14610097578063859fc542146100bb5780638ada066e146100d75780638da5cb5b146100f5578063ab07a95614610113575b600080fd5b610081600480360381019061007c9190611183565b610143565b60405161008e91906111e5565b60405180910390f35b61009f610231565b6040516100b297969594939291906113c8565b60405180910390f35b6100d560048036038101906100d09190611470565b6102db565b005b6100df610307565b6040516100ec91906111e5565b60405180910390f35b6100fd61031f565b60405161010a91906114b9565b60405180910390f35b61012d60048036038101906101289190611183565b610345565b60405161013a91906114d4565b60405180910390f35b600081600061019d7f6bdaeb2d29561f159c7ef98b16b27015fb2aeb87209c7ee656226d912f59927d83600001516040516020016101829291906114f6565b60405160208183030381529060405280519060200120610432565b905060006101af82846020015161044c565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610216576040517f3093a27700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610221600254610478565b63ffffffff169350505050919050565b60006060806000806000606061024561053b565b61024d610576565b46306000801b600067ffffffffffffffff81111561026e5761026d610fa7565b5b60405190808252806020026020018201604052801561029c5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b60006102ef826102ea90611577565b6105b1565b90506102fd600254826105c7565b6002819055505050565b6000610314600254610478565b63ffffffff16905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606081600061039f7f6bdaeb2d29561f159c7ef98b16b27015fb2aeb87209c7ee656226d912f59927d83600001516040516020016103849291906114f6565b60405160208183030381529060405280519060200120610432565b905060006103b182846020015161044c565b90503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610418576040517f3093a27700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61042860025486600001516105db565b9350505050919050565b600061044561043f610611565b836106c8565b9050919050565b60008060008061045c8686610709565b92509250925061046c8282610765565b82935050505092915050565b6000610483826108c9565b6104945761049160006108d6565b91505b600082905060006104a4826108ea565b90506000608073ffffffffffffffffffffffffffffffffffffffff166373cc01546002846040518363ffffffff1660e01b81526004016104e59291906115fb565b602060405180830381865afa158015610502573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105269190611657565b905061053181610947565b9350505050919050565b606061057160007f000000000000000000000000000000000000000000000000000000000000000061095190919063ffffffff16565b905090565b60606105ac60017f000000000000000000000000000000000000000000000000000000000000000061095190919063ffffffff16565b905090565b60006105c08260000151610a01565b9050919050565b60006105d38383610a15565b905092915050565b60606105e6836108c9565b6105f7576105f460006108d6565b92505b600083905061060860028285610a8d565b91505092915050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561068d57507f000000000000000000000000000000000000000000000000000000000000000046145b156106ba577f000000000000000000000000000000000000000000000000000000000000000090506106c5565b6106c2610b43565b90505b90565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b6000806000604184510361074e5760008060006020870151925060408701519150606087015160001a905061074088828585610bd9565b95509550955050505061075e565b60006002855160001b9250925092505b9250925092565b6000600381111561077957610778611684565b5b82600381111561078c5761078b611684565b5b03156108c557600160038111156107a6576107a5611684565b5b8260038111156107b9576107b8611684565b5b036107f0576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600381111561080457610803611684565b5b82600381111561081757610816611684565b5b0361085c578060001c6040517ffce698f700000000000000000000000000000000000000000000000000000000815260040161085391906111e5565b60405180910390fd5b60038081111561086f5761086e611684565b5b82600381111561088257610881611684565b5b036108c457806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016108bb91906116b3565b60405180910390fd5b5b5050565b6000808214159050919050565b60006108e3826002610ccd565b9050919050565b6060602067ffffffffffffffff81111561090757610906610fa7565b5b6040519080825280601f01601f1916602001820160405280156109395781602001600182028036833780820191505090505b509050816020820152919050565b6000819050919050565b606060ff60001b831461096e5761096783610d6f565b90506109fb565b81805461097a906116fd565b80601f01602080910402602001604051908101604052809291908181526020018280546109a6906116fd565b80156109f35780601f106109c8576101008083540402835291602001916109f3565b820191906000526020600020905b8154815290600101906020018083116109d657829003601f168201915b505050505090505b92915050565b6000610a0e826002610de3565b9050919050565b6000610a20836108c9565b610a3157610a2e60006108d6565b92505b610a3a826108c9565b610a4b57610a4860006108d6565b91505b600083905060008390506000610a7f60028484608073ffffffffffffffffffffffffffffffffffffffff16622df619610e7d565b905080935050505092915050565b6060608073ffffffffffffffffffffffffffffffffffffffff1663a1848ff385610ab6866108ea565b85604051602001610ac7919061174f565b6040516020818303038152906040526040518463ffffffff1660e01b8152600401610af49392919061176a565b600060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610b3a9190611850565b90509392505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000004630604051602001610bbe959493929190611899565b60405160208183030381529060405280519060200120905090565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c1115610c19576000600385925092509250610cc3565b600060018888888860405160008152602001604052604051610c3e94939291906118ec565b6020604051602081039080840390855afa158015610c60573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610cb457600060016000801b93509350935050610cc3565b8060008060001b935093509350505b9450945094915050565b60006060608073ffffffffffffffffffffffffffffffffffffffff166319e1c5c4610cf7866108ea565b856040518363ffffffff1660e01b8152600401610d15929190611931565b600060405180830381865afa158015610d32573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610d5b91906119d1565b9050610d6681610f11565b91505092915050565b60606000610d7c83610f1f565b90506000602067ffffffffffffffff811115610d9b57610d9a610fa7565b5b6040519080825280601f01601f191660200182016040528015610dcd5781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b60006060608073ffffffffffffffffffffffffffffffffffffffff16635fa55ca784866040518363ffffffff1660e01b8152600401610e239291906115fb565b600060405180830381865afa158015610e40573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610e6991906119d1565b9050610e7481610f11565b91505092915050565b60006060838388610e8d896108ea565b610e96896108ea565b6040518463ffffffff1660e01b8152600401610eb49392919061176a565b600060405180830381865afa158015610ed1573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610efa91906119d1565b9050610f0581610f6f565b91505095945050505050565b600060208201519050919050565b60008060ff8360001c169050601f811115610f66576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b600060208201519050919050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610fdf82610f96565b810181811067ffffffffffffffff82111715610ffe57610ffd610fa7565b5b80604052505050565b6000611011610f7d565b905061101d8282610fd6565b919050565b600080fd5b6000819050919050565b61103a81611027565b811461104557600080fd5b50565b60008135905061105781611031565b92915050565b600080fd5b600080fd5b600067ffffffffffffffff82111561108257611081610fa7565b5b61108b82610f96565b9050602081019050919050565b82818337600083830152505050565b60006110ba6110b584611067565b611007565b9050828152602081018484840111156110d6576110d5611062565b5b6110e1848285611098565b509392505050565b600082601f8301126110fe576110fd61105d565b5b813561110e8482602086016110a7565b91505092915050565b60006040828403121561112d5761112c610f91565b5b6111376040611007565b9050600061114784828501611048565b600083015250602082013567ffffffffffffffff81111561116b5761116a611022565b5b611177848285016110e9565b60208301525092915050565b60006020828403121561119957611198610f87565b5b600082013567ffffffffffffffff8111156111b7576111b6610f8c565b5b6111c384828501611117565b91505092915050565b6000819050919050565b6111df816111cc565b82525050565b60006020820190506111fa60008301846111d6565b92915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b61123581611200565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561127557808201518184015260208101905061125a565b60008484015250505050565b600061128c8261123b565b6112968185611246565b93506112a6818560208601611257565b6112af81610f96565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112e5826112ba565b9050919050565b6112f5816112da565b82525050565b61130481611027565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61133f816111cc565b82525050565b60006113518383611336565b60208301905092915050565b6000602082019050919050565b60006113758261130a565b61137f8185611315565b935061138a83611326565b8060005b838110156113bb5781516113a28882611345565b97506113ad8361135d565b92505060018101905061138e565b5085935050505092915050565b600060e0820190506113dd600083018a61122c565b81810360208301526113ef8189611281565b905081810360408301526114038188611281565b905061141260608301876111d6565b61141f60808301866112ec565b61142c60a08301856112fb565b81810360c083015261143e818461136a565b905098975050505050505050565b600080fd5b6000602082840312156114675761146661144c565b5b81905092915050565b60006020828403121561148657611485610f87565b5b600082013567ffffffffffffffff8111156114a4576114a3610f8c565b5b6114b084828501611451565b91505092915050565b60006020820190506114ce60008301846112ec565b92915050565b600060208201905081810360008301526114ee8184611281565b905092915050565b600060408201905061150b60008301856112fb565b61151860208301846112fb565b9392505050565b60006020828403121561153557611534610f91565b5b61153f6020611007565b9050600082013567ffffffffffffffff81111561155f5761155e611022565b5b61156b848285016110e9565b60008301525092915050565b6000611583368361151f565b9050919050565b600060ff82169050919050565b6115a08161158a565b82525050565b600081519050919050565b600082825260208201905092915050565b60006115cd826115a6565b6115d781856115b1565b93506115e7818560208601611257565b6115f081610f96565b840191505092915050565b60006040820190506116106000830185611597565b818103602083015261162281846115c2565b90509392505050565b611634816111cc565b811461163f57600080fd5b50565b6000815190506116518161162b565b92915050565b60006020828403121561166d5761166c610f87565b5b600061167b84828501611642565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020820190506116c860008301846112fb565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061171557607f821691505b602082108103611728576117276116ce565b5b50919050565b6000819050919050565b61174961174482611027565b61172e565b82525050565b600061175b8284611738565b60208201915081905092915050565b600060608201905061177f6000830186611597565b818103602083015261179181856115c2565b905081810360408301526117a581846115c2565b9050949350505050565b600067ffffffffffffffff8211156117ca576117c9610fa7565b5b6117d382610f96565b9050602081019050919050565b60006117f36117ee846117af565b611007565b90508281526020810184848401111561180f5761180e611062565b5b61181a848285611257565b509392505050565b600082601f8301126118375761183661105d565b5b81516118478482602086016117e0565b91505092915050565b60006020828403121561186657611865610f87565b5b600082015167ffffffffffffffff81111561188457611883610f8c565b5b61189084828501611822565b91505092915050565b600060a0820190506118ae60008301886112fb565b6118bb60208301876112fb565b6118c860408301866112fb565b6118d560608301856111d6565b6118e260808301846112ec565b9695505050505050565b600060808201905061190160008301876112fb565b61190e6020830186611597565b61191b60408301856112fb565b61192860608301846112fb565b95945050505050565b6000604082019050818103600083015261194b81856115c2565b905061195a6020830184611597565b9392505050565b600061197461196f84611067565b611007565b9050828152602081018484840111156119905761198f611062565b5b61199b848285611257565b509392505050565b600082601f8301126119b8576119b761105d565b5b81516119c8848260208601611961565b91505092915050565b6000602082840312156119e7576119e6610f87565b5b600082015167ffffffffffffffff811115611a0557611a04610f8c565b5b611a11848285016119a3565b9150509291505056fea264697066735822122086e0c085698ac9e9bc436016ec989588118f7ddb7177ce80e98716c874701bf064736f6c63430008190033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Counter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Counter__factory {
    return super.connect(runner) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new Interface(_abi) as CounterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Counter {
    return new Contract(address, _abi, runner) as unknown as Counter;
  }
}
