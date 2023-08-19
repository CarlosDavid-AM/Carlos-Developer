import MainHeader from "./component/MainHeader"
import ListaCrips from "./component/atm/indexComponent/ListaCrips"
import Presentacion from "./component/atm/indexComponent/Presentacion"
import Diferencias from "./component/atm/indexComponent/diferencias"

function App() {
  return (
    <>
      <MainHeader />

      {/* Primera parte del body 1/4 */}
      <Presentacion />

      {/* Primera parte del body 2/4 */}
      <Diferencias />

      {/* Primera parte del body 3/4 */}
      <ListaCrips />
    </>
  )
}

export default App
