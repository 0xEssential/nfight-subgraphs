import { BigInt } from "@graphprotocol/graph-ts";
import {
  FighterUpdated,
  TokenRegistered,
  ProjectRegistered
} from "../generated/NFightUpgradeableChild/NFightUpgradeableChild"
import { FighterSkill, FighterWithSkills, NFTProject } from "../generated/schema"

export function handleProjectRegistered(event: ProjectRegistered): void {
  let project = new NFTProject(event.params.contractAddress.toHexString() + event.params.chainId.toHexString())
  project.contractAddress = event.params.contractAddress;
  project.chainId = event.params.chainId.toI32(); 
  project.tokenCount = 0;
  project.save();
}

export function handleFighterUpdated(event: FighterUpdated): void {
  let fighterId = event.params.contractAddress.toHexString() + event.params.tokenId.toString();
  
  // we should only touch the Fighter entity if this is 
  // a Polygon token
  // let fighter = Fighter.load(fighterId);
  // if (fighter == null) {
  //   fighter = new Fighter(fighterId);
  //   fighter.contractAddress = event.params.contractAddress;
  //   fighter.tokenId = event.params.tokenId;
  //   // not associated with project tho?
    
  //   // fighter.project = 
  // }

  let stats: FighterSkill | null = null;
  
  // if (fighter.stats != null) {
  //   stats = FighterStats.load(fighter.stats!);
  // }

  stats = FighterSkill.load(fighterId);

  if (stats == null) {
    stats = new FighterSkill(fighterId);
    stats.fighter = fighterId;
    // fighter.stats = stats.id;
  }
  
  stats.aggression = event.params.aggression;
  stats.awareness = event.params.awareness;
  stats.determination = event.params.determination;
  stats.power = event.params.power;
  stats.resilience = event.params.resilience;
  stats.speed = event.params.speed;
  stats.aggregatePoints = event.params.aggression.plus(event.params.awareness).plus(event.params.determination).plus(event.params.power).plus(event.params.resilience).plus(event.params.speed);
  
  stats.save();

  // fighter.registered = true;
  // fighter.save();
}

export function handleTokenRegistered(event: TokenRegistered): void {
  let id = event.params.contractAddress.toHexString() + event.params.tokenId.toString();
 

  let fighter = FighterWithSkills.load(id);
  let increment = false;

  if (fighter == null) {
    increment = true;
    fighter = new FighterWithSkills(id);
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
