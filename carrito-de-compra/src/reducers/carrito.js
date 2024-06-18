export const carritoEstadoInicial = JSON.parse(window.localStorage.getItem("carrito")) || []

export const TIPOS_DE_ACCIONES_DEL_CARRITO = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
}

export const actualizarLocalStorage = estado => {
    window.localStorage.setItem("carrito", JSON.stringify(estado))
}

export const carritoReducer = (estado, accion) => {
    const { type: accionType, payload: accionPayLoad } = accion
    switch (accionType) {
        case TIPOS_DE_ACCIONES_DEL_CARRITO.ADD_TO_CART: {
            const { id } = accionPayLoad
            const productoEnCarritoId = estado.findIndex(item => item.id === id)

            if (productoEnCarritoId >= 0) {
                const nuevoEstado = structuredClone(estado)
                nuevoEstado[productoEnCarritoId].quantity += 1

                // 👶 usando el map
                // const nuevoEstado = estado.map(item => {
                //   if (item.id === id) {
                //     return {
                //       ...item,
                //       quantity: item.quantity + 1
                //     }
                //   }

                //   return item
                // })

                // ⚡ usando el spread operator y slice
                // const nuevoEstado = [
                //    ...estado.slice(0, productoEnCarritoId),
                //    { ...estado[productoEnCarritoId], quantity: estado[productoEnCarritoId].quantity + 1 },
                //    ...estado.slice(productoEnCarritoId + 1)
                // ]

                actualizarLocalStorage(nuevoEstado)
                return nuevoEstado
            }

            const nuevoEstado = [
                ...estado,
                {
                    ...accionPayLoad, // producto
                    quantity: 1
                }
            ]
            actualizarLocalStorage(nuevoEstado)
            return nuevoEstado
        }
        case TIPOS_DE_ACCIONES_DEL_CARRITO.REMOVE_FROM_CART: {
            const { id } = accionPayLoad
            const nuevoEstado = estado.filter(item => item.id !== id)
            actualizarLocalStorage(nuevoEstado)
            return nuevoEstado
        }
        case TIPOS_DE_ACCIONES_DEL_CARRITO.CLEAR_CART: {
            // return []
            actualizarLocalStorage([])
            return []
        }
    }

    return estado
}