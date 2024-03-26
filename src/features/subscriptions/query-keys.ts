export const accountSubscriptionById = (address: string, id: string) => ['account-subscription', address, id]
export const subscriptionMembersQueryKey = (address: string, id: string) => ['account-subscription-members', address, id]
export const accountSubscriptionsCreatedQueryKey = (address: string) => ['account-subscriptions-created', address]
export const accountSubscriptionsSignedQueryKey = (address: string) => ['account-subscriptions-signed', address]
