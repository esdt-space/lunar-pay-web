import BigNumber from "bignumber.js";

import { Token } from "@/core/tokens";

export type DonationInteractionOptions = {
  token: Token;
  receiver: string;
  amount: BigNumber;
  donationId: string;
  metadata?: string;
}
