import HTML from "../../../img/svg/html-5.svg"
import Tailwindcss from "../../../img/svg/tailwindcss.svg"
import Javascript from "../../../img/svg/javascript.svg"
import React from "../../../img/svg/react.svg"
import Typescript from "../../../img/svg/Typescript.svg"

const Tegnologias = () => {
  return(
    <div>
      <div className="bg-gray-200 container mt-4 mb-32 mx-auto py-9 lg:w-6/12">
        <h2 className="mt-2 font-semibold text-center text-2xl">
          Tecnologias que uso
        </h2>
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-center gap-x-3 ">
            <img src={HTML} className="h-20" alt="HTML" />
            <img src={Tailwindcss} className="h-7" alt="Tailwindcss" />
            <img src={Javascript} className="h-20" alt="Javascript" />
          </div>
          <div className="flex items-center gap-x-3">
            <img src={React} className="h-20" alt="React" />
            <img src={Typescript} className="h-20" alt="Typescript" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tegnologias