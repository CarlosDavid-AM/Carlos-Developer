const AcercaDeMi = () => {
  return(
    <div>
      <div className="container flex flex-col lg:flex-row justify-betweens mt-44 gap-x-4">
        <div className="mx-auto lg:mx-0">
          <div className="bg-green-400 w-44 h-52 rounded-md mb-9 lg:mb-0 lg:ml-60">
            foto 
          </div>
        </div>
        <div className="h-80 lg:h-52 bg-gray-200 container mx-auto">
          <div>
            <h1 className="mt-2 font-medium">
              Un poco sobre mi
            </h1>
            <div className="text-sm">
              <p className="mt-3">
                Soy un apasionado programador front-end con enfoque en el desarrollo web. A través de mi dedicación y 
                autodidactismo, he adquirido sólidos conocimientos en HTML5, CSS3 y JavaScript. 
                Me especializo en el uso container mx-auto  de React.js para crear interfaces interactivas y completamente dinámicas.
              </p>
              <p className="mt-3">
                Soy un jugador de equipo, comunicativo y proactivo, lo que me permite colaborar efectivamente y 
                abordar desafíos con entusiasmo. Mi objetivo es seguir creciendo como desarrollador front-end y 
                contribuir en el desarrollo de experiencias web excepcionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcercaDeMi