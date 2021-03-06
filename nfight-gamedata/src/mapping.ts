import {
  FighterUpdated,
  TokenRegistered
} from "../generated/NFightChildUpgradeable/NFightChildUpgradeable"
import { Fighter, SyncStatus } from "../generated/schema"

export function handleFighterUpdated(event: FighterUpdated): void {
  let id = event.params.contractAddress.toHexString() + event.params.tokenId.toString();
  let fighter = Fighter.load(id);
 
  if (fighter == null) {
    fighter = new Fighter(id);
  }
  
  fighter.aggression = event.params.aggression;
  fighter.awareness = event.params.awareness;
  fighter.determination = event.params.determination;
  fighter.power = event.params.power;
  fighter.resilience = event.params.resilience;
  fighter.speed = event.params.speed;

  fighter.aggregatePoints = fighter.aggression.plus(fighter.awareness).plus(fighter.determination).plus(fighter.power).plus(fighter.resilience).plus(fighter.speed);

  fighter.contractAddress = event.params.contractAddress;
  fighter.tokenId = event.params.tokenId;

  fighter.save();
}

export function handleTokenRegistered(event: TokenRegistered): void {
  let id = event.params.contractAddress.toHexString() + event.params.tokenId.toString();
  let fighter = Fighter.load(id);
 
  if (fighter == null) {
    fighter = new Fighter(id);
  }

  fighter.contractAddress = event.params.contractAddress;
  fighter.tokenId = event.params.tokenId;
  fighter.save();

  let syncStatus = new SyncStatus(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
  syncStatus.fighter = id;
  syncStatus.timestamp = event.block.timestamp;
  syncStatus.status = "Synced";
  syncStatus.save()
}
