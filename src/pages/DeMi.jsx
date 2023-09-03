import { Link } from "react-router-dom"
import MainHeader from "../component/MainHeader"
import Botom from "../component/atm/Botom"
import AcercaDeMi from "../component/atm/deMiComponent/AcercaDeMi"
import Tegnologias from "../component/atm/deMiComponent/Tegnologias"
import MainFooter from "../component/MainFooter"

const DeMi = () => {
  return(
    <>
      <div>
        <MainHeader />

    
        {/* Parte 1 */}
        <div className="fondo py-20">
          <div className="container mx-auto text-center">
            <div className="mt-9">
              <h1 className="text-3xl font-medium">
                Conoce mas sobre mi
              </h1>
              <div className="mt-14 flex justify-center items-center gap-x-5">
                <Link to="/proyects"><Botom name="Mira mis proyectos web"/></Link>
                <div className="flex">
                  <Link to="/contacto">Contactame</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parte 2 */}
        <AcercaDeMi />

        {/* Parte 3 */}
        <Tegnologias />

        <MainFooter/>
      </div>
    </>
  )
}

export default DeMi