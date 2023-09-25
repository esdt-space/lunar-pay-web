import {Outlet} from "react-router-dom";

import {PublicPageHeader} from "./public-page-header.tsx";

export function AppLayout() {
  return (
    <main className={'flex flex-1 flex-col'}>
      <PublicPageHeader />
      <div className={'flex flex-1 mt-16'}>
        <Outlet />
      </div>
    </main>
  )
}