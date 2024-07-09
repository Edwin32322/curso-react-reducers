import { TYPES } from "../actions/contadorActions.js"
export const contadorInitialState = {
    contador: 0,
}
export const init = (state) => {
    return { ...state, contador: state.contador + 100 }
}
export function contadorReducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { ...state, contador: state.contador + action.payload }
        case TYPES.DECREMENT:
            return { ...state, contador: state.contador - action.payload }
        case TYPES.RESET:
            return contadorInitialState
        default:
            return state
    }
}