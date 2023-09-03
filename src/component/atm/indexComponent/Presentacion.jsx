import Botom from "../../../component/atm/Botom"
import user from "../../../img/user.jpg"
import "../../../css/fondo.css"
import { Link } from "react-router-dom"

const Presentacion = () => {
  return (
    <div className="fondo">
        <div className="container pt-20 lg:pt-0 flex flex-col lg:flex-row justify-between mx-auto items-center">
          <div className="w-full lg:w-1/2 tracking-wide">
            <h1 className="text-3xl text-center lg:text-left font-medium">
                Carlos David programador Front End
            </h1>
            <div className="mt-9 flex justify-center lg:float-none lg:justify-start">
              <a href="">
                <Link to="/proyects"><Botom name="Mira mis proyectos web"/></Link>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={user} alt="User" className="h-52 lg:h-80 rounded-lg lg:rounded-xl my-16 mx-auto"/>
          </div>
        </div>
      </div>
  )
}

export default Presentacion