import {
  ProjectRegistered,
  TokenRegistered
} from "../generated/NFightParent/NFightParent"
import { Project } from "../generated/templates"
import { NFTProject, Fighter, SyncStatus } from "../generated/schema"
import { DataSourceContext } from "@graphprotocol/graph-ts";

export function handleProjectRegistered(event: ProjectRegistered): void {
  let project = new NFTProject(event.params.contractAddress.toHexString() + "0x1")
  project.contractAddress = event.params.contractAddress;
  project.chainId = 1; 
  project.save();

  let context = new DataSourceContext()
  context.setBytes('contractAddress', event.params.contractAddress)
  Project.createWithContext(event.params.contractAddress, context);
}


export function handleTokenRegistered(event: TokenRegistered): void {
  let project = NFTProject.load(event.params.contractAddress.toHexString() + "0x1");
  
  if (project != null) {
    let id = event.params.contractAddress.toHexString() + event.params.tokenId.toString();
    let fighter = new Fighter(id);
    fighter.project = project.id;
    fighter.contractAddress = event.params.contractAddress;
    fighter.tokenId = event.params.tokenId
    fighter.owner = event.params.owner;
    fighter.save();

    let syncStatus = new SyncStatus(event.transaction.hash.toHex() + "-" + event.logIndex.toString())
    syncStatus.fighter = id;
    syncStatus.timestamp = event.block.timestamp;
    syncStatus.status = "Syncing";
    syncStatus.save()
  }
  
}

