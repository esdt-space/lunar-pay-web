export enum SubscriptionAmountType {
  AnyAmount = 'AnyAmount',
  FixedAmount = 'FixedAmount',
  BoundedAmount = 'BoundedAmount',
  SenderDefinedFixedAmount = 'SenderDefinedFixedAmount',
  SenderDefinedBoundedAmount = 'SenderDefinedBoundedAmount',
  CreatorDefinedFixedAmountPerReceiver = 'CreatorDefinedFixedAmountPerReceiver',
  CreatorDefinedBoundedAmountPerReceiver = 'CreatorDefinedBoundedAmountPerReceiver',
}