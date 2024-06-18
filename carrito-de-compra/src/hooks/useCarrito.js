import { useContext } from "react";
import { CarritoContext } from "../context/carrito.jsx";

export const useCarrito = () => {
    const carrito = useContext(CarritoContext)

    if (carrito === undefined) {
        throw new Error("carrito undefined")
    }

    return carrito
}