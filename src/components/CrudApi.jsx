import { useEffect, useReducer, useState } from "react"
import { helpHttp } from "../helpers/helpHttp"
import { CrudForm } from "./CrudForm"
import { CrudTable } from "./CrudTable"
import { Loader } from "./Loader"
import { Message } from "./Message"
import { crudReducer, initialCrudState } from "../reducers/crudReducer"
import { TYPES } from "../actions/crudActions"
export const CrudApi = () => {
    let api = helpHttp()
    let url = "http://localhost:3000/productos"
    // const [products, setProducts] = useState(null)
    const [state, dispatch] = useReducer(crudReducer, initialCrudState)
    const { products } = state
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [productToEdit, setProductToEdit] = useState(null)
    const createData = (form) => {
        const payload = {
            ...form
        }
        api.post(url, {
            body: payload,
            headers: { "content-type": "application/json" }
        }).then(res => {
            if (!res.error) {
                dispatch({ type: TYPES.CREATE_DATA, payload: res })
            } else {
                setError(res)
            }
        })
    }
    const updateData = (payload) => {
        let endpoint = `${url}/${payload.id}`
        api.put(endpoint, {
            body: payload,
            headers: { "content-type": "application/json" }
        }).then(res => {
            if (!res.err) {
                dispatch({ type: TYPES.UPDATE_DATA, payload: payload })
            } else {
                setError(res)
            }
        })
    }
    const deleteData = (id) => {
        const confirm = window.confirm("¿Desea eliminar el producto?")
        let endpoint = `${url}/${id}`
        if (confirm) {
            api.del(endpoint, {
                "content-type": "application/json"
            }).then(res => {
                if (!res.err) {
                    dispatch({ type: TYPES.DELETE_DATA, payload: id })
                } else {
                    setError(res)
                }
            })
        } else {
            return
        }
    }
    useEffect(() => {
        setLoading(true)
        //JSON WEB SERVER
        api.get(url).then(res => {
            if (!res.err) {
                dispatch({ type: TYPES.READ_ALL_DATA, payload: res })
            } else {
                dispatch({ type: TYPES.NO_DATA })

            }
            setLoading(false)
        })
    }, [url])
    return (
        <div>
            <h2>Crud API - JSON WEB SERVER</h2>
            <CrudForm createData={createData} updateData={updateData} productToEdit={productToEdit} setProductToEdit={setProductToEdit}></CrudForm>
            {products && <CrudTable products={products} setProductToEdit={setProductToEdit} deleteData={deleteData}></CrudTable>}
            {error && <Message msg={`Error: ${error.status}-${error.statusText}`} bgColor={"#dc3545"}></Message>}
            {loading && <Loader></Loader>}
        </div>
    )
}
