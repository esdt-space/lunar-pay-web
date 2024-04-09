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
  static createSubscription = '/subscriptions/new'
  static approveSubscription = '/approve-subscription'
  static viewSubscription = '/subscriptions/:id'
  static updateSubscription = '/subscriptions/:id/edit'
  static signedSubscription = '/subscriptions/:id/signed'

  static subscription = '/subscription'
  static signSubscription = '/subscription/:id'

  static paymentAgreements = '/payment-agreements'
  static createPaymentAgreementIndex = '/payment-agreements/new'
  static createPaymentAgreementSubscription = '/payment-agreements/new/subscription'
  static updatePaymentAgreement = '/payment-agreements/:id/edit'

  static donations = '/donations'
  static createDonationIndex = '/donations/new'
  static createDonationWidget = '/donations/new/widget'
  static createOneTimeDonation = '/donations/new/one-time-donation'
  static createDonationGoal = '/donations/new/donation-goal'
  static donationPublic = '/donations/:id/public'

  static eventActions = '/event-actions'
  static eventDonations = '/event-donations'

  static tokensOperations = '/tokens-operations'
  static transactions = '/transactions'

  static admin = '/admin'

  static getDefaultLoginRoute() {
    return this.home
  }
}
