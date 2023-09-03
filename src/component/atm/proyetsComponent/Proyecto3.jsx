import GogGall from "../../../img/proyects/galeriaDog.jpg"
import BtnRepo from "../BtnRepo"
import BtnVisite from "../BtnVisite"

const Proyecto3 = () => {
  return(
    <div className="border rounded-lg shadow-lg">
      <div><img src={GogGall} alt="ListaCrips" className="h-44 lg:h-52"/></div>
      <div className="mt-9 p-3">
        <h1 className="font-semibold text-xl">Galeria de Perros</h1>
        <span>--Aun en desarrollo--</span>
        <p className="mt-9 mb-6 w-full lg:w-96">
          Una galería encantadora de imágenes de perros de diversas razas, alimentada por una API. 
          Navega por una colección visualmente atractiva de fotos de perros que te alegrarán el día.
        </p>
        <div className="flex gap-x-6 items-center">
          <BtnVisite pagina="" />
          <BtnRepo repositorio="https://github.com/CarlosDavid-AM/Galeria-de-Perros"/>
        </div>
      </div>
    </div>
  )
}

export default Proyecto3