import Crips from "../../../img/proyects/Crips.jpg"
import Botom from "../Botom"

const Proyecto2 = () => {
  return(
    <div className="border rounded shadow-lg">
      <div><img src={Crips} alt="ListaCrips" className="h-52"/></div>
      <div className="mt-9 p-3">
        <h1 className="font-semibold text-xl">ListaCrips</h1>
        <p className="mt-9 mb-6 w-96">
          Una plataforma que muestra información en tiempo real sobre criptomonedas líderes, 
          incluyendo precios actualizados, cambios porcentuales y más, utilizando datos de APIs.
        </p>
        <div className="flex gap-x-6 items-center">
          <a href="https://carloscriptos.vercel.app/" target="_blank">
            <Botom name="Visita el sitio web"/>
          </a>
          <a href="https://github.com/CarlosDavid-AM/ListaCrips" target="_blank" 
          className="bg-orange-100 py-1 px-2 rounded border border-orange-500">
            Ver el repositorio
          </a>
        </div>
      </div>
    </div>
  )
}

export default Proyecto2