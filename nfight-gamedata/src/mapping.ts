import { BigInt } from "@graphprotocol/graph-ts";
import {
  FighterUpdated,
  TokenRegistered,
  ProjectRegistered
} from "../generated/NFightUpgradeableChild/NFightUpgradeableChild"
import { Fighter, NFTProject } from "../generated/schema"

export function handleProjectRegistered(event: ProjectRegistered): void {
  let project = new NFTProject(event.params.contractAddress.toHexString() + event.params.chainId.toHexString())
  project.contractAddress = event.params.contractAddress;
  project.chainId = event.params.chainId.toI32(); 
  project.tokenCount = 0;
  project.save();
}

export function handleFighterUpdated(event: FighterUpdated): void {
  let id = event.params.contractAddress.toHexString() + event.params.tokenId.toString();
  let fighter = Fighter.load(id);
 
  if (fighter == null) {
    fighter = new Fighter(id);
    // not associated with project tho?
    
    // fighter.project = 
  }
  
  fighter.aggression = event.params.aggression;
  fighter.awareness = event.params.awareness;
  fighter.determination = event.params.determination;
  fighter.power = event.params.power;
  fighter.resilience = event.params.resilience;
  fighter.speed = event.params.speed;

  fighter.aggregatePoints = event.params.aggression.plus(event.params.awareness).plus(event.params.determination).plus(event.params.power).plus(event.params.resilience).plus(event.params.speed);

  fighter.contractAddress = event.params.contractAddress;
  fighter.tokenId = event.params.tokenId;
  fighter.owner = event.params.ownerAddress;
  fighter.registered = true;
  fighter.save();
}

export function handleTokenRegistered(event: TokenRegistered): void {
  let id = event.params.contractAddress.toHexString() + event.params.tokenId.toString();
 

  let fighter = Fighter.load(id);
  let increment = false;

  if (fighter == null) {
    increment = true;
    fighter = new Fighter(id);
  }

  let projectIdL2 = event.params.contractAddress.toHexString() + "0x89";
  let projectL2 = NFTProject.load(projectIdL2);
  if (projectL2 != null && increment == true) {
    projectL2.tokenCount += 1;
    projectL2.save()
  }

  fighter.project = projectIdL2;

  fighter.owner = event.params.owner;
  fighter.contractAddress = event.params.contractAddress;
  fighter.tokenId = event.params.tokenId;
  fighter.save();
}
