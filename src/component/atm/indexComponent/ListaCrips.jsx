import Crips from "../../../img/proyects/Crips.jpg"
import BtnRepo from "../BtnRepo"
import BtnVisite from "../BtnVisite"

const ListaCrips = () => {
  return(
    <div className="bg-gray-200 border border-y-gray-400">
        <div className="container mx-auto flex justify-between items-center">

          {/* Novil */}
          <div className="lg:hidden">
            <div className="container mx-auto flex flex-col py-6 pl-7">
              <div>
                <img className="rounded-sm" src={Crips} alt="ListaCrips" />
              </div>
              <div className="pt-6">
                <h2 className="font-semibold text-center text-2xl pb-2">
                  ListaCrips
                </h2>
                <p className="pt-3 text-center">
                  Una plataforma que muestra información en tiempo real sobre criptomonedas líderes, 
                  incluyendo precios actualizados, cambios porcentuales y más, utilizando datos de APIs.
                </p>
                <div className="flex justify-center py-6 gap-x-6">
                  <BtnVisite pagina="https://carloscriptos.vercel.app/" />
                  <BtnRepo repositorio="https://github.com/CarlosDavid-AM/ListaCrips"/>
                </div>
              </div>
              <div className="flex pt-4 gap-x-10 justify-center">
              <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Escritorio */}
            <button className="hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="hidden lg:block">
                <div className="flex  py-6 items-center pl-7">
                    <div className="flex flex-col text-sm w-1/2 gap-y-4">
                        <h1 className="font-semibold text-3xl pb-2">
                            ListaCrips
                        </h1>
                        <p className="pr-14">
                          Una plataforma que muestra información en tiempo real sobre criptomonedas líderes, 
                          incluyendo precios actualizados, cambios porcentuales y más, utilizando datos de APIs.
                        </p>
                        <div className="flex gap-x-6">
                          <BtnVisite pagina="https://carloscriptos.vercel.app/" />
                          <BtnRepo repositorio="https://github.com/CarlosDavid-AM/ListaCrips"/>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-sm my-9 h-60" src={Crips} alt="ListaCrips" />
                    </div>
                </div>
            </div>
            <button className="hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
        </div>
      </div>
  )
}

export default ListaCrips