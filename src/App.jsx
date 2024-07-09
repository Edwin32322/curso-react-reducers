import './App.css'
import { Contador } from './components/Contador'
import { ContadorMejorado } from './components/ContadorMejorado'
import { ShopingCart } from './components/ShopingCart'

function App() {
  return (
    <>
      <div>
        <h1>useReducer</h1>
        <hr />
        <ShopingCart></ShopingCart>
        <hr />
        <ContadorMejorado></ContadorMejorado>
        <hr />
        <Contador></Contador>
        <hr />
      </div>
    </>
  )
}

export default App
