export class RoutesConfig {
  static home = '/'

  static approveSubscription = '/approve-subscription'

  static getDefaultLoginRoute() {
    return this.home
  }
}
