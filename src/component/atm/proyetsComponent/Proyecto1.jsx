import pagina from "../../../img/proyects/PW.png"

const Proyecto1 = () => {
  return(
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h2 className="font-medium text-xl">
          Mi Pagina Web    
        </h2>
        <p className="pt-4 pb-9 text-sm">
          Descubre mi trayectoria y habilidades a través de una variedad de proyectos que he creado. 
          Desde aplicaciones web interactivas hasta soluciones elegantes de diseño, 
          cada proyecto refleja mi pasión por el desarrollo front-end. 
          Explora cómo he utilizado tecnologías como HTML5, CSS3 y JavaScript para dar vida a ideas creativas. 
          ¡Sumérgete en mi mundo de creación digital y descubre cómo he abordado desafíos 
          y desarrollado soluciones innovadoras!
        </p>
        <a href="https://carlos-developer.vercel.app/" 
        className="bg-green-800 px-4 py-2 rounded text-gray-100">
          Visitar el Sitio Web
        </a>
      </div>
      <div className="w-1/2">
        <img src={pagina} alt="Mi Pagina Web" className="h-52 mx-auto mt-9 border rounded-sm"/>
      </div>
    </div>
  )
}

export default Proyecto1