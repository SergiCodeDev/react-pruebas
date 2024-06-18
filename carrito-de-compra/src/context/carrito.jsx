import { createContext, useReducer } from "react";
import { carritoReducer, carritoEstadoInicial } from "../reducers/carrito";

export const CarritoContext = createContext()

function useCarritoReducer() {
    const [estado, dispatch] = useReducer(carritoReducer, carritoEstadoInicial)

    const anyadirAlCarrito = product => dispatch({
        type: "ADD_TO_CART",
        payload: product
    })

    const removerDelCarrito = product => dispatch({
        type: "REMOVE_FROM_CART",
        payload: product
    })

    const limpiarCarrito = () => dispatch({
        type: "CLEAR_CART"
    })

    return { estado, anyadirAlCarrito, removerDelCarrito, limpiarCarrito }
}

export function CarritoProvider({ children }) {
const { estado, anyadirAlCarrito, removerDelCarrito, limpiarCarrito } = useCarritoReducer()
    return (
        <CarritoContext.Provider value={{
            carrito: estado,
            anyadirAlCarrito,
            removerDelCarrito,
            limpiarCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    )

}