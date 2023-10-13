import {AddressType, AddressValue, List, ListType, OptionValue} from "@multiversx/sdk-core/out";

export function getAgreementWhitelistInteractionValue(addresses: AddressValue[]){
  return new OptionValue(
    new ListType(new AddressType()), List.fromItems(addresses)
  )
}
