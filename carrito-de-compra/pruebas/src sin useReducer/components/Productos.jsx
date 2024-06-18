import "./Productos.css"
import { AddToCartIcon, RemoveFromCartIcon } from "./Iconos.jsx"
import { useCarrito } from "../hooks/useCarrito.js"

export function Productos({ productos }) {
    const { anyadirAlCarrito, removerDelCarrito, carrito } = useCarrito()

    const mirarProductoEnElCarrito = producto => {
        return carrito.some(item => item.id === producto.id)
    }

    return (
        <main className="products">
            <ul>
                {
                    // slice solo para limitar los productos ahora
                    productos.slice(0, 10).map(producto => {
                        const estaElProductoEnElCarrito = mirarProductoEnElCarrito(producto)

                        return (
                            <li key={producto.id}>
                                <img src={producto.thumbnail} alt={producto.title} />
                                <div>
                                    <strong>{producto.title}</strong> - {producto.price} €
                                </div>
                                <div>
                                    <button 
                                    style={{backgroundColor: estaElProductoEnElCarrito ? "red" : "lime"}}
                                     onClick={() => {
                                        estaElProductoEnElCarrito
                                            ? removerDelCarrito(producto)
                                            : anyadirAlCarrito(producto)
                                    }}>
                                        {
                                            estaElProductoEnElCarrito
                                                ? <RemoveFromCartIcon />
                                                : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}