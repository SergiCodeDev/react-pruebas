import "./Carrito.css"

import { useId } from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Iconos.jsx"
import { useCarrito } from "../hooks/useCarrito.js"

function ItemsCarrito({ thumbnail, price, title, quantity, anyadirAlCarrito, removerDelCarrito }) {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - {price} €
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={anyadirAlCarrito}>+</button>
                <button style={{backgroundColor: "red"}} onClick={removerDelCarrito}>
                    <RemoveFromCartIcon />
                </button>
            </footer>
        </li>
    )
}


export function Carrito() {
    const carritoCheckBoxId = useId()
    const { carrito, limpiarCarrito, anyadirAlCarrito, removerDelCarrito } = useCarrito()

    return (
        <>
            <label className="cart-button" htmlFor={carritoCheckBoxId}>
                <CartIcon />
            </label>

            <input type="checkbox" id={carritoCheckBoxId} hidden />

            <aside className="cart">
                <ul>
                    {
                        carrito.map(producto => (
                            <ItemsCarrito key={producto.id} 
                            anyadirAlCarrito={() => anyadirAlCarrito(producto)}
                            removerDelCarrito={() => removerDelCarrito(producto)}
                            {...producto} />
                        ))
                    }
                </ul>
                <button onClick={limpiarCarrito}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )

}