import {Outlet} from "react-router-dom";

import {PublicPageFooter} from "./public-page-footer.tsx";
import {PublicPageHeader} from "./public-page-header.tsx";

export function PublicLayout() {
  return (
    <main className={'flex flex-1 flex-col'}>
      <PublicPageHeader />
      <Outlet />
      <PublicPageFooter />
    </main>
  )
}