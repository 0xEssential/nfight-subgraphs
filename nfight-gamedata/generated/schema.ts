// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class NFTProject extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contractAddress", Value.fromBytes(Bytes.empty()));
    this.set("chainId", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTProject entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NFTProject entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NFTProject", id.toString(), this);
    }
  }

  static load(id: string): NFTProject | null {
    return changetype<NFTProject | null>(store.get("NFTProject", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value!.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get chainId(): i32 {
    let value = this.get("chainId");
    return value!.toI32();
  }

  set chainId(value: i32) {
    this.set("chainId", Value.fromI32(value));
  }

  get tokenCount(): i32 {
    let value = this.get("tokenCount");
    return value!.toI32();
  }

  set tokenCount(value: i32) {
    this.set("tokenCount", Value.fromI32(value));
  }
}

export class Fighter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("contractAddress", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("aggression", Value.fromBigInt(BigInt.zero()));
    this.set("awareness", Value.fromBigInt(BigInt.zero()));
    this.set("determination", Value.fromBigInt(BigInt.zero()));
    this.set("power", Value.fromBigInt(BigInt.zero()));
    this.set("resilience", Value.fromBigInt(BigInt.zero()));
    this.set("speed", Value.fromBigInt(BigInt.zero()));
    this.set("aggregatePoints", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Fighter entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Fighter entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Fighter", id.toString(), this);
    }
  }

  static load(id: string): Fighter | null {
    return changetype<Fighter | null>(store.get("Fighter", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value!.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get aggression(): BigInt {
    let value = this.get("aggression");
    return value!.toBigInt();
  }

  set aggression(value: BigInt) {
    this.set("aggression", Value.fromBigInt(value));
  }

  get awareness(): BigInt {
    let value = this.get("awareness");
    return value!.toBigInt();
  }

  set awareness(value: BigInt) {
    this.set("awareness", Value.fromBigInt(value));
  }

  get determination(): BigInt {
    let value = this.get("determination");
    return value!.toBigInt();
  }

  set determination(value: BigInt) {
    this.set("determination", Value.fromBigInt(value));
  }

  get power(): BigInt {
    let value = this.get("power");
    return value!.toBigInt();
  }

  set power(value: BigInt) {
    this.set("power", Value.fromBigInt(value));
  }

  get resilience(): BigInt {
    let value = this.get("resilience");
    return value!.toBigInt();
  }

  set resilience(value: BigInt) {
    this.set("resilience", Value.fromBigInt(value));
  }

  get speed(): BigInt {
    let value = this.get("speed");
    return value!.toBigInt();
  }

  set speed(value: BigInt) {
    this.set("speed", Value.fromBigInt(value));
  }

  get aggregatePoints(): BigInt {
    let value = this.get("aggregatePoints");
    return value!.toBigInt();
  }

  set aggregatePoints(value: BigInt) {
    this.set("aggregatePoints", Value.fromBigInt(value));
  }

  get syncStatuses(): Array<string> | null {
    let value = this.get("syncStatuses");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set syncStatuses(value: Array<string> | null) {
    if (!value) {
      this.unset("syncStatuses");
    } else {
      this.set("syncStatuses", Value.fromStringArray(<Array<string>>value));
    }
  }

  get project(): string | null {
    let value = this.get("project");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set project(value: string | null) {
    if (!value) {
      this.unset("project");
    } else {
      this.set("project", Value.fromString(<string>value));
    }
  }
}

export class SyncStatus extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fighter", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("status", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SyncStatus entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save SyncStatus entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("SyncStatus", id.toString(), this);
    }
  }

  static load(id: string): SyncStatus | null {
    return changetype<SyncStatus | null>(store.get("SyncStatus", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fighter(): string {
    let value = this.get("fighter");
    return value!.toString();
  }

  set fighter(value: string) {
    this.set("fighter", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value!.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}
