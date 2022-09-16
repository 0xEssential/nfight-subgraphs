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

export class FighterWithSkills extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("contractAddress", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("registered", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FighterWithSkills entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FighterWithSkills entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FighterWithSkills", id.toString(), this);
    }
  }

  static load(id: string): FighterWithSkills | null {
    return changetype<FighterWithSkills | null>(
      store.get("FighterWithSkills", id)
    );
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

  get registered(): boolean {
    let value = this.get("registered");
    return value!.toBoolean();
  }

  set registered(value: boolean) {
    this.set("registered", Value.fromBoolean(value));
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

  get skills(): string | null {
    let value = this.get("skills");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set skills(value: string | null) {
    if (!value) {
      this.unset("skills");
    } else {
      this.set("skills", Value.fromString(<string>value));
    }
  }
}

export class FighterSkill extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fighter_id", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FighterSkill entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FighterSkill entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FighterSkill", id.toString(), this);
    }
  }

  static load(id: string): FighterSkill | null {
    return changetype<FighterSkill | null>(store.get("FighterSkill", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fighter(): string | null {
    let value = this.get("fighter");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fighter(value: string | null) {
    if (!value) {
      this.unset("fighter");
    } else {
      this.set("fighter", Value.fromString(<string>value));
    }
  }

  get fighter_id(): string {
    let value = this.get("fighter_id");
    return value!.toString();
  }

  set fighter_id(value: string) {
    this.set("fighter_id", Value.fromString(value));
  }

  get aggression(): BigInt | null {
    let value = this.get("aggression");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set aggression(value: BigInt | null) {
    if (!value) {
      this.unset("aggression");
    } else {
      this.set("aggression", Value.fromBigInt(<BigInt>value));
    }
  }

  get awareness(): BigInt | null {
    let value = this.get("awareness");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set awareness(value: BigInt | null) {
    if (!value) {
      this.unset("awareness");
    } else {
      this.set("awareness", Value.fromBigInt(<BigInt>value));
    }
  }

  get determination(): BigInt | null {
    let value = this.get("determination");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set determination(value: BigInt | null) {
    if (!value) {
      this.unset("determination");
    } else {
      this.set("determination", Value.fromBigInt(<BigInt>value));
    }
  }

  get power(): BigInt | null {
    let value = this.get("power");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set power(value: BigInt | null) {
    if (!value) {
      this.unset("power");
    } else {
      this.set("power", Value.fromBigInt(<BigInt>value));
    }
  }

  get resilience(): BigInt | null {
    let value = this.get("resilience");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set resilience(value: BigInt | null) {
    if (!value) {
      this.unset("resilience");
    } else {
      this.set("resilience", Value.fromBigInt(<BigInt>value));
    }
  }

  get speed(): BigInt | null {
    let value = this.get("speed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set speed(value: BigInt | null) {
    if (!value) {
      this.unset("speed");
    } else {
      this.set("speed", Value.fromBigInt(<BigInt>value));
    }
  }

  get aggregatePoints(): BigInt | null {
    let value = this.get("aggregatePoints");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set aggregatePoints(value: BigInt | null) {
    if (!value) {
      this.unset("aggregatePoints");
    } else {
      this.set("aggregatePoints", Value.fromBigInt(<BigInt>value));
    }
  }
}
