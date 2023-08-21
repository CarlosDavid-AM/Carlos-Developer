import GogGall from "../../../img/proyects/galeriaDog.jpg"
import Botom from "../Botom"

const Proyecto3 = () => {
  return(
    <div className="border rounded shadow-lg">
      <div><img src={GogGall} alt="ListaCrips" className="h-52"/></div>
      <div className="mt-9 p-3">
        <h1 className="font-semibold text-xl">Galeria de Perros</h1>
        <span>--Aun en desarrollo--</span>
        <p className="mt-9 mb-6 w-96">
          Una galería encantadora de imágenes de perros de diversas razas, alimentada por una API. 
          Navega por una colección visualmente atractiva de fotos de perros que te alegrarán el día.
        </p>
        <div className="flex gap-x-6 items-center">
          <a href="" target="_blank">
            <Botom name="Visita el sitio web"/>
          </a>
          <a href="https://github.com/CarlosDavid-AM/Galeria-de-Perros" target="_blank" 
          className="bg-orange-100 py-1 px-2 rounded border border-orange-500">
            Ver el repositorio
          </a>
        </div>
      </div>
    </div>
  )
}

export default Proyecto3