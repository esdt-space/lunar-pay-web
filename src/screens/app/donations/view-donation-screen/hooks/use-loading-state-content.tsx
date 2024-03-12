import { LoaderWithIconAndText } from "@/components/shared/loaders";

export function useLoadingStateContent(isLoading: boolean) {
  if (!isLoading) return null;

  return (
    <div className={'p-16'}>
      <LoaderWithIconAndText>
        Please wait, we are loading the donations ...
      </LoaderWithIconAndText>
    </div>
  )
}
