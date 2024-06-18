import { createContext, useContext, useState } from "react";

export const CarritoContext = createContext()

export function CarritoProvider({children}) {
    const [carrito, setCarrito] = useState([])

    const anyadirAlCarrito = producto => {
        // setCarrito([... carrito, producto]) // forma muy simple
        const productoEnCarritoId = carrito.findIndex(item => item.id === producto.id)

        if(productoEnCarritoId >= 0) {
            // clona de manera profunda el array, esta bien usarlo para arrays pequeños (por los tiempos)
            const nuevoCarrito = structuredClone(carrito)
            nuevoCarrito[productoEnCarritoId].quantity += 1
            return setCarrito(nuevoCarrito)
        }

        // producto no esta en el carrito
        setCarrito(estadoAnterior => ([...estadoAnterior,
            {
                ...producto,
                quantity: 1
            }
        ]))

    }

const removerDelCarrito = producto => {
    setCarrito(estadoAnterior => estadoAnterior.filter(item => item.id !== producto.id))
}

    const limpiarCarrito = () => {
        setCarrito([])
    }

    return (
        <CarritoContext.Provider value={{
            carrito,
            anyadirAlCarrito,
            removerDelCarrito,
            limpiarCarrito
        }}>
            {children}
        </CarritoContext.Provider>
    )

}