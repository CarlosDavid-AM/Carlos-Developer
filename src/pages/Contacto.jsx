import MainHeader from "../component/MainHeader"
import Correo from "../component/atm/Contactos/Correo"
import Redes from "../component/atm/Contactos/Redes"
import Telefono from "../component/atm/Contactos/Telefono"

const Contacto = () => {
  return(
    <div>
      <MainHeader/>
      <div>
        <div className="container mx-auto pt-52 text-center">
          <h1 className="font-semibold text-5xl">
            Contacto
          </h1>

          <div className="flex justify-center mt-10 gap-x-16 text-center">
            {/* Telefono */}
          <Telefono/>

          {/* Correo electronico */}
          <Correo/>

          </div>

          {/* Redes Sociales */}
          <Redes/>
        </div>
      </div>

      <div className="bg-gray-50 text-center py-4 absolute bottom-0 w-full">
        <p>Carlos David © 2023 | Programador Front End</p>
      </div>
    </div>
  )
}

export default Contacto