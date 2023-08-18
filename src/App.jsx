import "./css/fondo.css"
import MainHeader from "./component/MainHeader"
import Botom from "./component/atm/Botom"
import user from "./img/user.jpg"
import proyectos from "./img/Proyectos.png"
import conosimientos from "./img/Conosimientos.png"
import formacion from "./img/Formacion.png"
import ListaCrips from "./img/proyects/ListaCrips.png"

function App() {
  return (
    <>
      <MainHeader />

      {/* Primera parte del body 1/4 */}
      <div className="fondo">
        <div className="container flex justify-between mx-auto items-center">
          <div className="w-1/2 tracking-wide">
            <h1 className="text-3xl font-medium">
                Carlos David programador Front End Developer
            </h1>
            <div className="mt-9">
              <a href="">
                <Botom name="Mira mis proyectos web"/>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <img src={user} alt="User" className="h-80 rounded-xl my-16 mx-auto"/>
          </div>
        </div>
      </div>

      {/* Primera parte del body 2/4 */}
      <div>
          <div className="container mx-auto my-16">
              <div className="text-center">
                  <h2 className="font-semibold text-2xl">
                      ¿Qué me hace diferente?
                  </h2>
              </div>
              <div className="flex text-center gap-x-6 my-10">
                  <div className="flex-1 flex flex-col items-center">
                      <img className="h-12" src={proyectos} alt="Proyectos"/>
                      <h3 className="pt-6 pb-3 font-medium">
                          Proyectos personales y portafolio
                      </h3>
                      <p className="text-sm text-neutral-text">
                          Desarrollé varios proyectos front-end, incluyendo mi prompia página web usando React.js 
                          y una aplicación web de lista de tareas con HTML, CSS y JavaScript.
                      </p>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                      <img className="h-12" src={conosimientos} alt="Conosimientos"/>
                      <h3 className="pt-6 pb-3 font-medium">
                          Conocimientos y habilidades técnicas:
                      </h3>
                      <p className="text-sm text-neutral-text">
                        Experiencia en el desarrollo de interfaces interactivas utilizando React.js.
                        Conocimiento basico de HTML5 y CSS3 para estructurar y estilizar contenido.
                        Uso efectivo de herramientas como Git y GitHub para el flujo de trabajo de desarrollo.
                      </p>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                      <img className="h-12" src={formacion} alt="Formacion"/>
                      <h3 className="pt-6 pb-3 font-medium">
                          Formación académica y cursos
                      </h3>
                      <p className="text-sm text-neutral-text">
                          Tengo desarrollo Web: Cursos en línea en EDteam.
                          Estoy certificado en Introducción a React.js, Plataforma de educación en línea.
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* Primera parte del body 3/4 */}
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
                            <a href="https://carloscriptos.vercel.app/" target="_blank" 
                            className="py-1 px-2 rounded border border-red-400">
                                Visita el proyecto ListaCrips
                            </a>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-sm my-9 h-60" src={ListaCrips} alt="ListaCrips" />
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
    </>
  )
}

export default App
