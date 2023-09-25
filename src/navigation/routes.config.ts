export class RoutesConfig {
  static home = '/'
  static auth = '/auth'

  static dashboard = '/dashboard'

  static payroll = '/payroll'

  static subscriptions = '/subscriptions'
  static approveSubscription = '/approve-subscription'

  static getDefaultLoginRoute() {
    return this.dashboard
  }
}
