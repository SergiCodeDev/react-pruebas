import "./Productos.css"
import { AddToCartIcon } from "./Iconos.jsx"

export function Productos({ productos }) {
    return (
        <main className="products">
            <ul>
                {
                    // slice solo para limitar los productos ahora
                    productos.slice(0,10).map(producto => (
                        <li key={producto.id}>
                            <img src={producto.thumbnail} alt={producto.title} />
                            <div>
                                <strong>{producto.title}</strong> - {producto.price} €
                            </div>
                            <div>
                                <button><AddToCartIcon /></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}