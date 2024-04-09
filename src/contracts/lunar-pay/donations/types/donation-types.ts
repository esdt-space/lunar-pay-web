import BigNumber from "bignumber.js";

import { Token } from "@/core/tokens";

export type DonationInteractionOptions = {
  token: Token;
  receiver: string;
  amount: BigNumber;
  metadata?: string;
}
