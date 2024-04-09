import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useIdleTimer } from 'react-idle-timer'
import { logout } from "@multiversx/sdk-dapp/utils";

import { MvxAxiosContext, MvxDappContext } from "@/lib/mvx";
import { ApplicationRouter, RoutesConfig } from "@/navigation";

const queryClient = new QueryClient();
const idleTimeout = import.meta.env.VITE_IDLE_TIMEOUT

function App() {
  useIdleTimer({
    onIdle: () => logout(RoutesConfig.home),
    timeout: idleTimeout,
  })

  return (
    <QueryClientProvider client={queryClient}>
      <MvxAxiosContext>
        <BrowserRouter>
            <MvxDappContext>
              <ApplicationRouter />
            </MvxDappContext>
        </BrowserRouter>
      </MvxAxiosContext>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
