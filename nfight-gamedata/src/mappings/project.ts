import {
  Transfer
} from "../../generated/Templates/Project/ERC721Transfer"
import { FighterWithSkills } from "../../generated/schema"
import { dataSource } from '@graphprotocol/graph-ts'

export function handleTransfer(event: Transfer): void {
  let context = dataSource.context()
  let contractAddress = context.getBytes('contractAddress')
  let id = contractAddress.toHexString() + event.params.tokenId.toString();
  let fighter = FighterWithSkills.load(id)
  
  if (fighter == null) {
    fighter = new FighterWithSkills(id);
  }

  fighter.contractAddress = contractAddress;
  fighter.owner = event.params.to;
  fighter.tokenId = event.params.tokenId;
  fighter.registered = false;
  fighter.project = contractAddress.toHexString() + "0x89"
  fighter.save();
}
