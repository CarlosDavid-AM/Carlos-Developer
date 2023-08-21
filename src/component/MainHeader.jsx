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
                    <Link to="/"><img src={Logo} alt="Logo" className="h-7" /></Link>
                </div>
                <div className="flex gap-x-4 text-sm">
                    <NavLink to="/">Inicio</NavLink>
                    <Link to="/proyects">Proyectos Web</Link>
                    <Link to="/de-mi">Acerca de Mi</Link>
                </div>
                <div>
                  <Link to="/contacto"><Botom name="Contactame"/></Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader