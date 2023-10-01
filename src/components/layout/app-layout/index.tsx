import {Outlet} from "react-router-dom";

import {AppPageHeader} from "./app-page-header.tsx";

export function AppLayout() {
  return (
    <main className={'flex flex-1 flex-col w-screen'}>
      <AppPageHeader />
      <div className={'flex flex-1 mt-16'}>
        <Outlet />
      </div>
    </main>
  )
}