import { useReducer } from "react"
const initialState = {
    contador: 0,
}
const TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET"
}
function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { ...state, contador: state.contador + action.payload }
        case TYPES.DECREMENT:
            return { ...state, contador: state.contador - action.payload }
        case TYPES.RESET:
            return initialState
        default:
            return state
    }
}
const init = (state) => {
    return { ...state, contador: state.contador + 100 }
}
export const ContadorMejorado = () => {
    const [state, dispatch] = useReducer(reducer, initialState, init)
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Contador Mejorado Reducer</h2>
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
