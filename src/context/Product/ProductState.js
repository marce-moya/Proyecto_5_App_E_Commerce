import { useReducer } from 'react'
import axiosClient from "./../../config/axios"
import ProductContext from "./ProductContext"
import ProductReducer from "./ProductReducer"


const ProductState = (props) => {

    const initialState = {
        products: [],
        producto: {  
            _id: "",
            SKU: "",
            Nombre: "",
            precio: "",
            Descripción: ""
        }
    }
    const [globalState, dispatch] = useReducer(ProductReducer, initialState);

    const getProduct = async (id) => {

        const res = await axiosClient.get(`/obtener-producto/${id}`);

        const Producto = res.data.products;

        dispatch({
            type: "GET_PRODUCT",
            payload: Producto
        });

        return Producto;

    };


    const getProducts = async () => {

        const res = await axiosClient.get("/obtener-productos")

        dispatch({
            type: "GET_PRODUCTOS",
            payload: res.data.products
        });

    };

    const getPreferenceCheckoutMP = async (dataform) => {

        console.log("dataform:", dataform);

        const res = await axiosClient.post("/mercadopago", dataform);

        return res.data.checkoutId;

    };


    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                producto: globalState.producto,
                getProduct,
                getProducts,
                getPreferenceCheckoutMP       
            }}
        >
            { props.children }
        </ProductContext.Provider>
    );

};


export default ProductState