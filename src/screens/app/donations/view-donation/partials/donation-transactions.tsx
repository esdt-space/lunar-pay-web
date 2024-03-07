import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { TokenOperationsTable } from "@/features/token-operations/components"
import { useTokenOperationsQuery } from "@/features/token-operations/hooks/queries";
import { useEmptyStateContent } from "../hooks";
import { useLoadingStateContent } from "@/screens/app/operations/hooks";

export const DonationTransactions = () => {
  const typeFilter = 'donation';
  const { data, isFetching, isFetched } = useTokenOperationsQuery(1, typeFilter);
  const operations = data?.operations.slice(0, 5) ?? []

  const isLoadingFirstTime = !isFetched && isFetching;
  const isLoadedAndHasData = isFetched && operations.length > 0;
  const isLoadedAndHasNoData = isFetched && operations.length === 0;

  const emptyStateContent = useEmptyStateContent(isLoadedAndHasNoData);
  const loadingStateContent = useLoadingStateContent(isLoadingFirstTime);

  return (
    <Card>
      <CardHeader className='text-lg font-semibold'>
        Latest Donations
      </CardHeader>
      <CardContent className={'p-0'}>
        {emptyStateContent}
        {loadingStateContent}

        {isLoadedAndHasData && (
          <div>
            <TokenOperationsTable
              operations={operations} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
