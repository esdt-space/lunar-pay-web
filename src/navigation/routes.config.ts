export class RoutesConfig {
  /** LandingPages **/
  static home = '/'
  static landingInvoices = '/solutions/invoices'
  static landingPayroll = '/solutions/payroll'
  static landingSubscriptions = '/solutions/subscriptions'
  static landingPortfolioManagement = '/solutions/portfolio-management'
  static landingVesting = '/solutions/vesting'
  static landingDonations = '/solutions/donations'
  static landingExpensesAndAllowances = '/solutions/expenses-and-allowances'

  static auth = '/auth'

  static dashboard = '/dashboard'

  static payroll = '/payroll'

  static subscriptions = '/subscriptions'
  static subscriptionMembers = '/subscriptions/members'
  static paymentAgreements = '/payment-agreements'
  static createPaymentAgreementIndex = '/payment-agreements/new'
  static createPaymentAgreementSubscription = '/payment-agreements/new/subscription'
  static updatePaymentAgreement = '/payment-agreements/new/subscription/update'
  static approveSubscription = '/approve-subscription'

  static tokensOperations = '/tokens-operations'
  static transactions = '/transactions'

  static admin = '/admin'

  static getDefaultLoginRoute() {
    return this.home
  }
}
