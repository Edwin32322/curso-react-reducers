import { useReducer } from "react"
import { shopingInitialState, shopingReducer } from "../reducers/shopingReducer"
import { ProductItem } from "./ProductItem"
import { CardItem } from "./CardItem"

export const ShopingCart = () => {
    const [state, dispatch] = useReducer(shopingReducer, shopingInitialState)
    const { products, cart } = state
    const addToCart = (id) => {
        const productToCart = products.find(product => product.id === id)
        dispatch({ Type: "ADD_TO_CART", Payload: productToCart })
    }
    const deleteToCart = (id, option) => {
        if (option === "one") {
            const indexOneProduct = products.find(product => product.id === id)
            dispatch({ Type: "REMOVE_ONE_FROM_CART", Payload: indexOneProduct })
        }
        if (option === "all") {
            const indexOneProduct = products.find(product => product.id === id)
            dispatch({ Type: "REMOVE_ALL_FROM_CART", Payload: indexOneProduct })
        }
    }
    const clearToCart = () => {
        dispatch({ Type: "CLEAR_CART" })
    }
    return (
        <div>
            <h2>Carrito de Compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map(producto => <ProductItem key={producto.id} data={producto} addToCart={addToCart}></ProductItem>)}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={clearToCart}>Limpiar Carrito</button>
                {cart.length > 0 && cart.map((item, index) => <CardItem key={index} data={item} deleteToCart={deleteToCart} ></CardItem>)}
            </article>
        </div>
    )
}
