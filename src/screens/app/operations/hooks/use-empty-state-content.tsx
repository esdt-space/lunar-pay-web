import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button.tsx";
import { EmptyStateWithAction } from "@/components/shared/empty-states";
import {RoutesConfig} from "@/navigation";

export function useEmptyStateContent(isEmpty: boolean) {
  if (!isEmpty) return null;

  return (
    <div className={'p-16'}>
      <EmptyStateWithAction
        title={'You don\'t have any token operations'}
        description={'Start managing your assets by creating your first deposit.'}
        action={
          <Button asChild variant={"outline"}>
            <Link to={RoutesConfig.dashboard}>
              Deposit Tokens
              <Plus className={'ml-2 w-4 h-4'} />
            </Link>
          </Button>
        }
      />
    </div>
  )
}