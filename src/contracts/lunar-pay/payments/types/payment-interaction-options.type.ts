import BigNumber from "bignumber.js";

import { Token } from "@/core/tokens";

export type PaymentInteractionOptions = {
  token: Token;
  receiver: string;
  amount: BigNumber;
  metadata?: string;
}