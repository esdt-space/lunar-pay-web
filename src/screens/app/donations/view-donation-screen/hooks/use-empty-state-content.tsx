import { EmptyStateWithAction } from "@/components/shared/empty-states";

export function useEmptyStateContent(isEmpty: boolean) {
  if (!isEmpty) return null;

  return (
    <div className={'p-16'}>
      <EmptyStateWithAction
        title={'No donations'}
        description={'No donations received so far.'}
        action={<></>}
      />
    </div>
  )
}
