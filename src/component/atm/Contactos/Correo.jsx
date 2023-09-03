import Gmail from "../../../img/gmail.png"

const Correo = () => {
  return(
    <div className="mt-16 lg:mt-0">
      <h2 className="font-medium text-xl">
      Correo Electronico
      </h2>
      <div className="flex justify-center items-center mt-3 gap-x-3">
        <img src={Gmail} className="h-9" alt="gmail"/>
        <a href="mailto:apolayamendozacarlos@gmail.com" className="underline text-blue-500">
          apolayamendozacarlos@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Correo