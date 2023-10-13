import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button.tsx";
import { EmptyStateWithAction } from "@/components/shared/empty-states";

export function useEmptyStateContent(isEmpty: boolean) {
  if (!isEmpty) return null;

  return (
    <EmptyStateWithAction
      title={'You don\'t have any token operations'}
      description={'Start managing your assets by creating your first deposit.'}
      action={
        <Button variant={"outline"}>
          Deposit Tokens
          <Plus className={'ml-2 w-4 h-4'} />
        </Button>
      }
    />
  )
}