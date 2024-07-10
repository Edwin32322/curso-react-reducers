import './App.css'
import { Contador } from './components/Contador'
import { ContadorMejorado } from './components/ContadorMejorado'
import { CrudApi } from './components/CrudApi'
import { ShopingCart } from './components/ShopingCart'

function App() {
  return (
    <>
      <div>
        <h1>useReducer</h1>
        <hr />
        <CrudApi></CrudApi>
        <hr />
        <ShopingCart></ShopingCart>
        <hr />
        <ContadorMejorado></ContadorMejorado>
        <hr />
        <Contador></Contador>
      </div>
    </>
  )
}

export default App
