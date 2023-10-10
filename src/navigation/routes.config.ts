export class RoutesConfig {
  /** LandingPages **/
  static home = '/'
  static landingInvoices = '/solutions/invoices'
  static landingPayroll = '/solutions/payroll'
  static landingSubscriptions = '/solutions/subscriptions'
  static landingVesting = '/solutions/vesting'
  static landingDonations = '/solutions/donations'
  static landingExpensesAndAllowances = '/solutions/expenses-and-allowances'

  static auth = '/auth'

  static dashboard = '/dashboard'

  static payroll = '/payroll'

  static subscriptions = '/subscriptions'
  static approveSubscription = '/approve-subscription'

  static tokensOperations = '/tokens-operations'
  static agreementsOverview = '/agreements-overview'

  static admin = '/admin'

  static getDefaultLoginRoute() {
    return this.home
  }
}
