import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Proyects from "../pages/Proyects";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import DeMi from "../pages/DeMi";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    element: <App/>
  },
  {
    path: "/proyects",
    element: <Proyects/>
  },
  {
    path: "/de-mi",
    element: <DeMi />
  },
  {
    path: "/contacto",
    element: <Contacto />
  }
])

export default Router