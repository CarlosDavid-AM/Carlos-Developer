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
        <div className="fondo mx-6 lg:m-14 py-20 lg:py-40 rounded-lg">
          <div className="text-center flex flex-col items-center">
            <h1 className="font-medium lg:font-semibold text-2xl px-6 lg:px-0">
              Trabajemos juntos y creemos un nuevo caso de éxito
            </h1>
            <div className="pt-9 flex flex-col lg:flex-row gap-y-9 gap-x-9 items-center">
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
        <div className="container mx-auto pr-16 pb-16 lg:pb-0 flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-9">
            <div>
              <img className="h-8 mt-10 lg:mt-0" src={Logo} alt="Logo"/>
            </div>
            <div className="flex justify-between">
              <div className="flex justify-between py-12 gap-x-3 items-center">
                <a href="https://www.linkedin.com/in/carlos-david-apolaya-mendoza-a30122219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BavHozhMVRIyBKbLODyZK3A%3D%3D"
                target="_blank">
                  <img src={Linkedin} className="h-6" alt="linkedin" />
                </a>
                <a href="https://www.facebook.com/david.apolaya.526/" target="_blank">
                  <img src={Facebook} className="h-7" alt="facebook" />
                </a>
                <a href="tel:933376104">
                  <img src={Whatsapp} className="h-8" alt="whatsapp" />
                </a>
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