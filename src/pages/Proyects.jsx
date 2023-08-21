import { Link } from "react-router-dom"
import MainHeader from "../component/MainHeader"
import Botom from "../component/atm/Botom"
import Proyecto1 from "../component/atm/proyetsComponent/Proyecto1"

const Proyects = () => {
  return(
    <>
      <MainHeader />
      <div className="fondo py-20">
        <div className="container mx-auto text-center">
          <div className="mt-9">
            <h1 className="text-3xl font-medium">
              Explora mis proyectos web
            </h1>
            <div className="mt-14">
              <Link to="/proyects">
                <Botom name="Mira mis proyectos web" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seccion de proyectos */}
      <div className="container mx-auto">
        {/* Proyecto 1 */}
        <Proyecto1 />
      </div>
    </>
  )
}

export default Proyects