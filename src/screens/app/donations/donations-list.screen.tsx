import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import { RoutesConfig } from "@/navigation";
import { ContainedScreen } from "@/components/prefab/contained-screen";
import { useDonationsCreatedQuery } from "@/features/donations/hooks/queries";
import { Button } from "@/components/ui/button";
import { DonationsListTable } from "@/features/donations/components";
import { Card, CardContent } from "@/components/ui/card";
import { PaginationButtons } from "@/components/shared/pagination";
import { EmptyStateWithAction } from "@/components/shared/empty-states";

export const DonationsListScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: donationsResponse,
    isFetched,
  } = useDonationsCreatedQuery(currentPage)

  const donationsList = donationsResponse?.data
  const numberOfPages = donationsResponse?.meta.totalPages

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

  const emptyDonationsList = isFetched && donationsList?.length === 0

  return (
    <ContainedScreen className="space-y-4">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">Donations List</div>
        <Button asChild>
          <Link to={RoutesConfig.createDonationIndex}>
            Create Donation
            <Plus className={'ml-2 w-4 h-4'}/>
          </Link>
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          {emptyDonationsList && (
            <div className={'p-12'}>
              <EmptyStateWithAction
                title={'No donations created'}
                description={"Donations that you create will appear here"}
                action={<></>}
              />
            </div>
          )}
          {!emptyDonationsList && (
            <div>
              <DonationsListTable donationsList={donationsList} />
              <PaginationButtons 
                previousPageHandler={previousPageHandler} 
                nextPageHandler={nextPageHandler}
                currentPage={currentPage}
                lastPage={numberOfPages} 
              />
            </div>
          )}
        </CardContent>
      </Card>
    </ContainedScreen>
  )
}
