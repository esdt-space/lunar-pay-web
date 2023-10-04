export type AgreementType = RecurringPayoutToSend 
  | RecurringPayoutToReceive 
  | TimeBoundPayoutToSend 
  | TimeBoundPayoutToReceive;

export enum FrequencyType {
  Weekly = 'W',
  Monthly = 'M',
  Yearly = 'Y',
}

type BoundedAmount = { address: string, amount: number }
type AmountType = FixedAmount | BoundedAmount | FixedAmountPerSubscriber

export type FixedAmount = { amount: number }
export type AnyAmount = any | undefined
export type FixedAmountPerSubscriber = BoundedAmount[]
export type BoundedAmountPerSubscriber = BoundedAmount[]
export type SubscriberDefinedAmount = BoundedAmount[]

export type RecurringPayoutToSend = {
  sender: string;
  receivers: string[];
  amountType: AmountType;

  frequency: FrequencyType;
};

export type RecurringPayoutToReceive = {
  receiver: string;
  senders: string[];
  amountType: AmountType;

  frequency: FrequencyType;
};

export type TimeBoundPayoutToSend = {
  sender: string;
  receivers: string[];
  amountType: AmountType;

  frequency: FrequencyType;
};

export type TimeBoundPayoutToReceive = {
  receiver: string;
  senders: string[];

  frequency: FrequencyType;
  amountType: AnyAmount | BoundedAmount | BoundedAmountPerSubscriber;
};
