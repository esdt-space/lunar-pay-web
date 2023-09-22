import { BrowserRouter } from "react-router-dom";

import {MvxAxiosContext, MvxDappContext} from "@/lib/mvx";
import { ApplicationRouter } from "@/navigation";

function App() {
  return (
    <MvxAxiosContext>
      <BrowserRouter>
          <MvxDappContext>
            <ApplicationRouter />
          </MvxDappContext>
      </BrowserRouter>
    </MvxAxiosContext>
  )
}

export default App
