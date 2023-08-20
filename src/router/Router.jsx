import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Proyects from "../pages/Proyects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/proyects",
    element: <Proyects/>
  }
])

export default Router