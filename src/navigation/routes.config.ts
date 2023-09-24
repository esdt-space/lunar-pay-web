export class RoutesConfig {
  static home = '/'
  static auth = '/auth'

  static dashboard = '/dashboard'
  static approveSubscription = '/approve-subscription'

  static getDefaultLoginRoute() {
    return this.dashboard
  }
}
