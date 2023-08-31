import Botom from "./atm/Botom"
import Logo from "../img/Logo.png"
import Linkedin from "../img/svg/linkedin.svg"
import Facebook from "../img/svg/facebook.svg"
import Whatsapp from "../img/svg/whatsapp.svg"
import Telefono from "../img/telefono.png"
import { Link } from "react-router-dom"

const MainFooter = () => {
  return(
    <div>
      <div className="-mb-60 relative z-10">
        <div className="fondo m-14 py-40 rounded-lg">
          <div className="text-center flex flex-col items-center">
            <h1 className="font-semibold text-2xl">
              Trabajemos juntos y creemos un nuevo caso de éxito
            </h1>
            <div className="pt-9 flex gap-x-9 items-center">
              <Link to="/contacto"><Botom name="Contactame" /></Link>
              <div className="flex items-center gap-x-2">
                <Link to="/proyects" className="font-light">
                  Mira mis Proyectos
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-72 relative z-0">
        <div className="container mx-auto pr-16 flex justify-between">
          <div className="flex flex-col gap-y-9">
            <div>
              <img className="h-8" src={Logo} alt="Logo"/>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-between py-12 gap-x-3 items-center">
                <img class="h-6" src={Linkedin} alt="linkedin"/>
                <img class="h-7" src={Facebook} alt="facebook"/>
                <img class="h-8" src={Whatsapp} alt="whatsapp"/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-9 text-sm">
            <div className="flex flex-col gap-y-6">
              <div className="flex">
                <Link to="/"><a href="">Inicio</a></Link>
                <Link to="/de-mi"><a href="" className="pl-20">Acerca de mi</a></Link>
              </div>
              <div className="flex">
                <Link to="/proyects"><a href="">Proyectos</a></Link>
                <Link to="/contacto"><a href="" class="pl-12" >Contactame</a></Link>
              </div>
            </div>
            <div>
              <div>Escribame al:</div>
              <div className="flex">
                <img className="h-8" src={Telefono} alt="telefono"/>
                <span>+51 933 376 104</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFooter