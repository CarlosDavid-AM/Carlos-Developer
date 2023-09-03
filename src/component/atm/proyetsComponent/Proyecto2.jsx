import Crips from "../../../img/proyects/Crips.jpg"
import BtnRepo from "../BtnRepo"
import BtnVisite from "../BtnVisite"

const Proyecto2 = () => {
  return(
    <div className="border rounded-lg shadow-lg">
      <div><img src={Crips} alt="ListaCrips" className="h-44 lg:h-52"/></div>
      <div className="mt-9 p-3">
        <h1 className="font-semibold text-xl">ListaCrips</h1>
        <p className="font-light lg:font-normal mt-9 mb-6 w-full lg:w-96">
          Una plataforma que muestra información en tiempo real sobre criptomonedas líderes, 
          incluyendo precios actualizados, cambios porcentuales y más, utilizando datos de APIs.
        </p>
        <div className="flex gap-x-6 items-center">
          <BtnVisite pagina="https://carloscriptos.vercel.app/" />
          <BtnRepo repositorio="https://github.com/CarlosDavid-AM/ListaCrips"/>
        </div>
      </div>
    </div>
  )
}

export default Proyecto2