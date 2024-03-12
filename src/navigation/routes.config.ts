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

  static frequentlyAskedQuestions = '/frequently-asked-questions'
  static termsAndConditions = '/terms-and-conditions'
  static whitepaper = '/whitepaper'
  static contactUs = '/contact'

  static auth = '/auth'

  static dashboard = '/dashboard'
  
  static contact = '/contact'

  static payroll = '/payroll'

  static subscriptions = '/subscriptions'
  static subscriptionMembers = '/subscriptions/members'

  static agreement = '/agreement'
  static signAgreement = '/agreement/:id'

  static paymentAgreements = '/payment-agreements'
  static createPaymentAgreementIndex = '/payment-agreements/new'
  static createPaymentAgreementSubscription = '/payment-agreements/new/subscription'
  static updatePaymentAgreement = '/payment-agreements/:id/edit'
  static approveSubscription = '/approve-subscription'

  static tokensOperations = '/tokens-operations'
  static transactions = '/transactions'

  static admin = '/admin'

  static event = '/event'

  static getDefaultLoginRoute() {
    return this.home
  }
}
