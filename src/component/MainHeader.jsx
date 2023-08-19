import Botom from "./atm/Botom"
import Logo from "../img/Logo.png"

const MainHeader = () => {
  return(
    <div>
      <div>
        <div className="fixed z-20  w-full">
          <div className="bg-gray-50 py-3">
            <div className="flex container mx-auto justify-between items-center">
                <div>
                    <img src={Logo} alt="Logo" className="h-7" />
                </div>
                <div className="flex gap-x-4 text-sm">
                    <a href="/">Inicio</a>
                    <a href="/proyectos.html">Proyectos Web</a>
                    <a href="/acercaDeMi.html">Acerca de Mi</a>
                </div>
                <div>
                  <Botom name="Contactame"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader