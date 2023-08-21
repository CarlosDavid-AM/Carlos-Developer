import celular from "../../../img/telefono.png"

const Telefono = () => {
  return(
    <div>
      <h2 className="font-medium text-xl">
        Telefono
      </h2>
      <div className="flex justify-center items-center mt-3 gap-x-3">
        <img src={celular} className="h-9" alt="telefono"/>
        <a href="tel:933376104" className="underline text-blue-500">
          +51 933 376 104
        </a>
      </div>
    </div>
  )
}

export default Telefono