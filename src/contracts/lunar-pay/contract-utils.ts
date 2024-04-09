import { AppEnvironment } from "@/environment";
import { AbiRegistry, Address, SmartContract } from "@multiversx/sdk-core/out";

import abi from "./abi/lunarpay.abi.json";

export const lunarPayAbiRegistry = AbiRegistry.create(abi);
export const lunarPaySmartContract = new SmartContract({
  address: new Address(AppEnvironment.contracts.lunarPay),
  abi: lunarPayAbiRegistry
});

export const gasLimit = import.meta.env.VITE_INTERACTION_GAS_LIMIT
