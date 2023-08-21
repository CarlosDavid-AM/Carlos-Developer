import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Proyects from "../pages/Proyects";
import AcercaDeMi from "../pages/acercaDeMi";
import Contacto from "../pages/Contacto";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/proyects",
    element: <Proyects/>
  },
  {
    path: "/acercaDeMi",
    element: <AcercaDeMi />
  }
  ,
  {
    path: "/contacto",
    element: <Contacto />
  }
])

export default Router