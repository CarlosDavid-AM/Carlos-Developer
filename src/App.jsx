import "./css/fondo.css"
import MainHeader from "./component/MainHeader"
import Botom from "./component/atm/Botom"
import user from "./img/user.jpg"


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
    </>
  )
}

export default App
