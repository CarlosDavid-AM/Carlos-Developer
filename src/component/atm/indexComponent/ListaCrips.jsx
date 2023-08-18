import Crips from "../../../img/proyects/Crips.jpg"

const ListaCrips = () => {
  return(
    <div className="bg-gray-200 border border-y-gray-400">
        <div className="container mx-auto flex justify-between items-center">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div>
                <div className="flex py-6 items-center pl-7">
                    <div className="flex flex-col text-sm w-1/2 gap-y-4">
                        <h1 className="font-semibold text-3xl pb-2">
                            ListaCrips
                        </h1>
                        <p className="pr-14">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati minima esse voluptas modi aliquam incidunt totam rem ex suscipit, qui mollitia ratione aperiam perferendis amet quos omnis repudiandae doloremque! Similique!
                        </p>
                        <div className="flex gap-x-6">
                            <a href="" className="bg-red-200 py-1 px-2 rounded border border-red-500">
                                Mira mis proyectos
                            </a>
                            <a href="https://carloscriptos.vercel.app/" className="py-1 px-2 rounded border border-red-400">
                                Visita el proyecto ListaCrips
                            </a>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-sm my-9 h-60" src={Crips} alt="ListaCrips" />
                    </div>
                </div>
            </div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
        </div>
      </div>
  )
}

export default ListaCrips