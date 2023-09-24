import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const DashboardScreen = () => {
    return <div className={'flex h-screen'}>
    <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 mt-24">
      <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
        <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl">Lunar Balance</CardTitle>
              <CardTitle className="text-2xl extrabold">100.00</CardTitle>
              <CardDescription>
              Deposited balance is the overall sum of all
                the tokens available in the Lunar Pay Vault.
                This balance may not be accurate as balance
                rates are not available for all tokens.
              </CardDescription>
            </CardHeader>
        </Card>
        <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl">Lunar Balance</CardTitle>
              <CardTitle className="text-2xl extrabold">100.00</CardTitle>
              <CardDescription>
              Deposited balance is the overall sum of all
                the tokens available in the Lunar Pay Vault.
                This balance may not be accurate as balance
                rates are not available for all tokens.
              </CardDescription>
            </CardHeader>
        </Card>
        <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl">Lunar Balance</CardTitle>
              <CardTitle className="text-2xl extrabold">100.00</CardTitle>
              <CardDescription>
              Deposited balance is the overall sum of all
                the tokens available in the Lunar Pay Vault.
                This balance may not be accurate as balance
                rates are not available for all tokens.
              </CardDescription>
            </CardHeader>
        </Card>
      </div>
    </div>
  </div>
}