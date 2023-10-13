import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"

import { RoutesConfig } from "@/navigation";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { TokenOperationsTable } from "@/features/token-operations/components";
import { useTokenOperationsQuery } from "@/features/token-operations/hooks/queries";

export const DashboardLatestTransactionsWidget = () => {
  const { data: operations = [] } = useTokenOperationsQuery();
  const latestOperations = operations.slice(0, 5);

  return (
    <Card className={'flex-1 shadow p-2'}>
      <CardHeader>
        <CardTitle className={'text-sm font-semibold uppercase tracking-wide'}>
          Latest Token Operations
        </CardTitle>
      </CardHeader>

      <CardContent>
        <TokenOperationsTable operations={latestOperations} />
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant={'outline'} asChild>
          <Link to={RoutesConfig.tokensOperations}>
            View All Token Operations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}