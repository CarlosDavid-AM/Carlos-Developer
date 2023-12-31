import { Link } from "react-router-dom"
import MainHeader from "../component/MainHeader"
import Botom from "../component/atm/Botom"
import Proyecto1 from "../component/atm/proyetsComponent/Proyecto1"
import Proyecto2 from "../component/atm/proyetsComponent/Proyecto2"
import Proyecto3 from "../component/atm/proyetsComponent/Proyecto3"
import MainFooter from "../component/MainFooter"

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
              <Link to="/de-mi">
                <Botom name="Conoce mas sobre mi" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Seccion de proyectos */}
      <div className="container mx-auto">
        {/* Proyecto 1 */}
        <Proyecto1 />

        {/* Proyecto 2 y 3 */}
        <div className="flex flex-col lg:flex-row justify-between mt-20">

          {/* Proyecto 2 */}
          <div className="py-10 lg:py-0">
            <Proyecto2/>
          </div>

          {/* Proyecto 3 */}
          <div className="py-10 lg:py-0">
            <Proyecto3/>
          </div>
        </div>
      </div>

      <MainFooter />
    </>
  )
}

export default Proyects