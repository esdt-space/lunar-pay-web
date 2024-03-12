import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import { RoutesConfig } from "@/navigation";
import { ContainedScreen } from "@/components/prefab/contained-screen";
import { useEffect, useState } from "react";
import { useDonationsCreatedQuery } from "@/features/donations/hooks/queries";
import { Button } from "@/components/ui/button";
import { DonationsListTable } from "@/features/donations/components";
import { Card } from "@/components/ui/card";
import { PaginationButtons } from "@/components/shared/pagination";

export const DonationsListScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const {
    data: donationsResponse,
  } = useDonationsCreatedQuery(currentPage)

  const numberOfPages = donationsResponse?.meta.totalPages
  
  useEffect(() => {
    if (donationsResponse?.data.length === 0) {
      navigate(RoutesConfig.createDonationIndex)
    }
  }, [])

  const nextPageHandler = () => setCurrentPage(page => page + 1);
  const previousPageHandler = () => setCurrentPage(page => Math.max(1, page - 1));

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
        <DonationsListTable donationsList={donationsResponse?.data} />
        <PaginationButtons 
          previousPageHandler={previousPageHandler} 
          nextPageHandler={nextPageHandler}
          currentPage={currentPage}
          lastPage={numberOfPages} 
        />
      </Card>
    </ContainedScreen>
  )
}
