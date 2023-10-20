type AmountValuePerSubscriber = {
  address: string;
  amount: number;
};

type BoundedAmountValuePerSubscriber = {
  address: string;
  amount: BoundedAmount;
};

type AnyAmount = undefined;
type FixedAmount = { amount: number };
type BoundedAmount = { minimum_amount?: number; maximum_amount: number };
type SubscriberDefinedAmount = AmountValuePerSubscriber[];
type FixedAmountPerSubscriber = AmountValuePerSubscriber[];
type BoundedAmountPerSubscriber = BoundedAmountValuePerSubscriber[];

type AmountType =
  | AnyAmount
  | FixedAmount
  | BoundedAmount
  | SubscriberDefinedAmount
  | FixedAmountPerSubscriber;
export type FrequencyType = 'SS' | 'MM' | 'HH' | 'D' | 'W' | 'M' | 'Y';

type RecurringPayoutToSend = {
  sender: string;
  receivers: string[];
  amountType: AmountType;

  frequency: FrequencyType;
};

type RecurringPayoutToReceive = {
  receiver: string;
  senders: string[];
  amountType: AmountType;

  frequency: FrequencyType;

  can_subscribe?: boolean;
  whitelistEnabled?: boolean;
  whitelistedAddresses?: [];
};

type TimeBoundPayoutToSend = {
  sender: string;
  receivers: string[];
  amountType: AmountType;

  frequency: FrequencyType;
};

type TimeBoundPayoutToReceive = {
  receiver: string;
  senders: string[];

  frequency: FrequencyType;
  amountType: AnyAmount | BoundedAmount | BoundedAmountPerSubscriber;
};

export type AgreementType =
  | RecurringPayoutToSend
  | RecurringPayoutToReceive
  | TimeBoundPayoutToSend
  | TimeBoundPayoutToReceive;
