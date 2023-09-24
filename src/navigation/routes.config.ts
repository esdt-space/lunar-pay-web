export class RoutesConfig {
  static home = '/'
  static auth = '/auth'

  static approveSubscription = '/approve-subscription'

  static getDefaultLoginRoute() {
    return this.home
  }
}
