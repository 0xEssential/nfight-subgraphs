import {
  ProjectRegistered,
  TokenRegistered
} from "../generated/NFightParent/NFightParent"
import { Project } from "../generated/templates"
import { NFTProject, Fighter } from "../generated/schema"
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

