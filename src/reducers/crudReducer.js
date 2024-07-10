import { TYPES } from "../actions/crudActions";
export const initialCrudState = {
    products: null
}
export function crudReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_ALL_DATA:
            return {
                ...state, products: action.payload.map(data => data)
            }
        case TYPES.CREATE_DATA:
            return {
                ...state, products: [...state.products, action.payload]
            }
        case TYPES.DELETE_DATA: {
            let newData = state.products.filter(product => product.id !== action.payload)
            return {
                ...state, products: newData
            }
        }
        case TYPES.UPDATE_DATA: {
            let newData = state.products.map(producto => producto.id === action.payload.id ? action.payload : producto)
            return {
                ...state, products: newData
            }
        }
        case TYPES.NO_DATA:
            return initialCrudState
        default:
            return state
    }
}