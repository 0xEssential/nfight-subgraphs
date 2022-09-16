import {
  ProjectRegistered,
  TokenRegistered,
} from "../generated/NFightParent/NFightParent"
import { Project } from "../generated/templates"
import { NFTProject, Fighter } from "../generated/schema"
import { BigInt, DataSourceContext } from "@graphprotocol/graph-ts";
import { ERC721 } from '../generated/NFightParent/ERC721'

export function handleProjectRegistered(event: ProjectRegistered): void {
  let project = new NFTProject(event.params.contractAddress.toHexString() + "0x1")
  project.contractAddress = event.params.contractAddress;
  project.chainId = 1; 
  project.save();

  let context = new DataSourceContext()
  context.setBytes('contractAddress', event.params.contractAddress)
  Project.createWithContext(event.params.contractAddress, context);

  
  const contractAddress = event.params.contractAddress;

  const nftContract = ERC721.bind(contractAddress);

  for (let tokenId = 1; tokenId < 500; tokenId++) {
    let owner = nftContract.try_ownerOf(BigInt.fromI32(tokenId));
    if (!owner.reverted) {
      let fighterId = contractAddress.toHexString() + tokenId.toString();
      let fighter = Fighter.load(fighterId);
      if (fighter == null) {
        fighter = new Fighter(fighterId);
      }
      fighter.contractAddress = contractAddress;
      fighter.tokenId = BigInt.fromI32(tokenId);
      fighter.project = project.id;
      fighter.owner = owner.value;
      fighter.save();
    }
  }
}


