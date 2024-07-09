import { useReducer } from "react"
import { contadorInitialState, contadorReducer, init } from "../reducers/contadorReducer"

export const Contador = () => {
    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, init)
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Contador Reducer</h2>
            <nav>
                <h3>
                    {state.contador}
                </h3>
                <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>+</button>
                <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>-</button>
                <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
            </nav>
        </div>
    )
}
