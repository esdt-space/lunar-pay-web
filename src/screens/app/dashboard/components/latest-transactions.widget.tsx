import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"

import { RoutesConfig } from "@/navigation";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { TokenOperationsTable } from "@/features/token-operations/components";
import { useTokenOperationsQuery } from "@/features/token-operations/hooks/queries";
import { useEmptyStateContent, useLoadingStateContent } from "../../operations/hooks";

export const DashboardLatestTransactionsWidget = () => {
  const { 
    data: tokenOperations,
    isFetched,
    isFetching
  } = useTokenOperationsQuery( 1, "" );
  const latestOperations = tokenOperations?.data?.slice(0, 5) ?? [];

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && latestOperations.length > 0;
  const isLoadedAndHasNoData = isFetched && latestOperations.length === 0;

  const emptyStateContent = useEmptyStateContent(isLoadedAndHasNoData);
  const loadingStateContent = useLoadingStateContent(isLoadingFirstTime);

  return (
    <>
      {!isLoadedAndHasData && 
        <Card className={'flex-1 shadow p-2'} >
          {emptyStateContent}
          {loadingStateContent}
        </Card>
      }

      {isLoadedAndHasData && (
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
      )}
    </>
  )
}