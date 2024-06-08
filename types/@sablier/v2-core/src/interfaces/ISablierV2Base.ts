/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface ISablierV2BaseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_FEE"
      | "admin"
      | "claimProtocolRevenues"
      | "comptroller"
      | "protocolRevenues"
      | "setComptroller"
      | "transferAdmin"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClaimProtocolRevenues"
      | "SetComptroller"
      | "TransferAdmin"
  ): EventFragment;

  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimProtocolRevenues",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "comptroller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolRevenues",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setComptroller",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAdmin",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimProtocolRevenues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "comptroller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolRevenues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setComptroller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAdmin",
    data: BytesLike
  ): Result;
}

export namespace ClaimProtocolRevenuesEvent {
  export type InputTuple = [
    admin: AddressLike,
    asset: AddressLike,
    protocolRevenues: BigNumberish
  ];
  export type OutputTuple = [
    admin: string,
    asset: string,
    protocolRevenues: bigint
  ];
  export interface OutputObject {
    admin: string;
    asset: string;
    protocolRevenues: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetComptrollerEvent {
  export type InputTuple = [
    admin: AddressLike,
    oldComptroller: AddressLike,
    newComptroller: AddressLike
  ];
  export type OutputTuple = [
    admin: string,
    oldComptroller: string,
    newComptroller: string
  ];
  export interface OutputObject {
    admin: string;
    oldComptroller: string;
    newComptroller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferAdminEvent {
  export type InputTuple = [oldAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [oldAdmin: string, newAdmin: string];
  export interface OutputObject {
    oldAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ISablierV2Base extends BaseContract {
  connect(runner?: ContractRunner | null): ISablierV2Base;
  waitForDeployment(): Promise<this>;

  interface: ISablierV2BaseInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  MAX_FEE: TypedContractMethod<[], [bigint], "view">;

  admin: TypedContractMethod<[], [string], "view">;

  claimProtocolRevenues: TypedContractMethod<
    [asset: AddressLike],
    [void],
    "nonpayable"
  >;

  comptroller: TypedContractMethod<[], [string], "view">;

  protocolRevenues: TypedContractMethod<[asset: AddressLike], [bigint], "view">;

  setComptroller: TypedContractMethod<
    [newComptroller: AddressLike],
    [void],
    "nonpayable"
  >;

  transferAdmin: TypedContractMethod<
    [newAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_FEE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claimProtocolRevenues"
  ): TypedContractMethod<[asset: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "comptroller"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "protocolRevenues"
  ): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setComptroller"
  ): TypedContractMethod<[newComptroller: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferAdmin"
  ): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "ClaimProtocolRevenues"
  ): TypedContractEvent<
    ClaimProtocolRevenuesEvent.InputTuple,
    ClaimProtocolRevenuesEvent.OutputTuple,
    ClaimProtocolRevenuesEvent.OutputObject
  >;
  getEvent(
    key: "SetComptroller"
  ): TypedContractEvent<
    SetComptrollerEvent.InputTuple,
    SetComptrollerEvent.OutputTuple,
    SetComptrollerEvent.OutputObject
  >;
  getEvent(
    key: "TransferAdmin"
  ): TypedContractEvent<
    TransferAdminEvent.InputTuple,
    TransferAdminEvent.OutputTuple,
    TransferAdminEvent.OutputObject
  >;

  filters: {
    "ClaimProtocolRevenues(address,address,uint128)": TypedContractEvent<
      ClaimProtocolRevenuesEvent.InputTuple,
      ClaimProtocolRevenuesEvent.OutputTuple,
      ClaimProtocolRevenuesEvent.OutputObject
    >;
    ClaimProtocolRevenues: TypedContractEvent<
      ClaimProtocolRevenuesEvent.InputTuple,
      ClaimProtocolRevenuesEvent.OutputTuple,
      ClaimProtocolRevenuesEvent.OutputObject
    >;

    "SetComptroller(address,address,address)": TypedContractEvent<
      SetComptrollerEvent.InputTuple,
      SetComptrollerEvent.OutputTuple,
      SetComptrollerEvent.OutputObject
    >;
    SetComptroller: TypedContractEvent<
      SetComptrollerEvent.InputTuple,
      SetComptrollerEvent.OutputTuple,
      SetComptrollerEvent.OutputObject
    >;

    "TransferAdmin(address,address)": TypedContractEvent<
      TransferAdminEvent.InputTuple,
      TransferAdminEvent.OutputTuple,
      TransferAdminEvent.OutputObject
    >;
    TransferAdmin: TypedContractEvent<
      TransferAdminEvent.InputTuple,
      TransferAdminEvent.OutputTuple,
      TransferAdminEvent.OutputObject
    >;
  };
}
