import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { MvxAxiosContext, MvxDappContext } from "@/lib/mvx";
import { ApplicationRouter } from "@/navigation";

const queryClient = new QueryClient()

function App() {
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
