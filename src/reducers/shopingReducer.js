import { TYPES } from "../actions/shopingActions";
export const shopingInitialState = {
    products: [
        { id: 1, name: "Producto 1", price: 1000 },
        { id: 2, name: "Producto 2", price: 2000 },
        { id: 3, name: "Producto 3", price: 3000 },
        { id: 4, name: "Producto 4", price: 4000 },
        { id: 5, name: "Producto 5", price: 5000 },
    ],
    cart: []
}
export function shopingReducer(state, action) {
    switch (action.Type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find((product) => product.id === action.Payload.id)
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            return itemInCart ? { ...state, cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item) } : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] }
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let newItem = state.products.find((product) => product.id === action.Payload.id)
            let itemInCart = state.cart.find(item => item.id === newItem.id)
            if (itemInCart.quantity === 1) {
                return { ...state, cart: state.cart.filter(item => item.id !== newItem.id) }
            }
            console.log(state.cart)
            return itemInCart ? { ...state, cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity - 1 } : item) } : state
        }
        case TYPES.REMOVE_ALL_FROM_CART:
            return { ...state, cart: state.cart.filter(item => item.id !== action.Payload.id) }
        case TYPES.CLEAR_CART:
            return { ...state, cart: shopingInitialState.cart }
        default:
            return state
    }
}