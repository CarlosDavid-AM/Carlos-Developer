import "./css/fondo.css"
import MainHeader from "./component/MainHeader"
import proyectos from "./img/Proyectos.png"
import conosimientos from "./img/Conosimientos.png"
import formacion from "./img/Formacion.png"
import ListaCrips from "./component/atm/indexComponent/ListaCrips"
import Presentacion from "./component/atm/indexComponent/Presentacion"
import SobreMi from "./component/atm/indexComponent/SobreMi"
import MainFooter from "./component/MainFooter"

function App() {
  return (
    <>
      <MainHeader />

      {/* Primera parte del body 1/4 */}
      <Presentacion />

      {/* Primera parte del body 2/4 */}
      <div>
          <div className="container mx-auto my-16">
              <div className="text-center">
                  <h2 className="font-semibold text-2xl">
                      ¿Qué me hace diferente?
                  </h2>
              </div>
              <div className="flex flex-col lg:flex-row text-center gap-x-6 my-10">
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
                  <div className="flex-1 flex flex-col items-center pt-10 lg:pt-0">
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
                  <div className="flex-1 flex flex-col items-center pt-10 lg:pt-0">
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
      <ListaCrips />

      {/* Primera parte del body 4/4 */}
      <SobreMi />

      {/* Footer */}
      <MainFooter />
    </>
  )
}

export default App
