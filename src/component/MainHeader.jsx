import Botom from "./atm/Botom"
import Logo from "../img/Logo.png"
import { Link, NavLink } from "react-router-dom"

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
                    <NavLink to="/">Inicio</NavLink>
                    <Link to="/proyects">Proyectos Web</Link>
                    <Link to="/acercaDeMi">Acerca de Mi</Link>
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