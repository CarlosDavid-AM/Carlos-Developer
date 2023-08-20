import HTML from "../../../img/svg/html-5.svg"
import CSS from "../../../img/svg/css-3.svg"
import JavaScrip from "../../../img/svg/javascript.svg"

const SobreMi = () => {
  return(
    <div>
        <div className="container mx-auto flex justify-center items-center py-20 gap-x-12">
          <div className="pt-28">
            <div className="bg-green-400 w-44 h-48 rounded-md ml-60">
              S
            </div>
          </div>

          <div className="w-1/2 pr-48 flex flex-col gap-y-6">
            <h2 className="font-medium text-xl">
              Un poco sobre mi
            </h2>
            <p className="text-sm">
              Soy un apasionado programador front-end con experiencia en HTML, CSS y JavaScript. 
              Especializado en React.js. Tengo proyectos personales aplicaciones web. 
              Soy utodidacta con cursos en línea y jugador de equipo, comunicativo y proactivo. 
              Busco seguir creciendo y contribuir en el desarrollo de experiencias web excepcionales.
            </p>

            <div>
              <h2 className="text-sm">Tecnologias y herramientas</h2>
              <div className="flex pt-5 gap-x-5">
                <img className="h-16" src={HTML} alt="HTML"/>
                <img className="h-16" src={CSS} alt="CSS"/>
                <img className="h-16" src={JavaScrip} alt="JavaScript"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SobreMi