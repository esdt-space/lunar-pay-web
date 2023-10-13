import { LoaderWithIconAndText } from "@/components/shared/loaders";

export function useLoadingStateContent(isLoading: boolean) {
  if (!isLoading) return null;

  return (
    <LoaderWithIconAndText>
      Please wait, we are loading the token operations ...
    </LoaderWithIconAndText>
  )
}