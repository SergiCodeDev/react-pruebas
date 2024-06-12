import { useState, useId } from "react"
import "./Filtros.css"

export function Filtros ({onChange}) {
    const [precioMinimo, setPrecioMinimo] = useState(0)
    const filtroPrecioMinimoId = useId()
    const filtroCategoriaId = useId()

    const handleCambioPrecioMinimo = (e) => {
        // aqui algo esta mal
        // dos fuentes de la verdad
        setPrecioMinimo(e.target.value)
        onChange(estadoPrevio => ({
            ...estadoPrevio,
            minPrice: e.target.value
        }))
    }

    const hamdleCambioCategoria = (e) => {
        // esta mal
        //pasando fn al estado nativo de react a un componente hijo
        onChange(estadoPrevio => ({
            ...estadoPrevio,
            category: e.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={filtroPrecioMinimoId}>Price</label>
                <input type="range" 
                name="price" 
                id={filtroPrecioMinimoId}
                min="0"
                max="1000"
                value={precioMinimo}
                onChange={handleCambioPrecioMinimo}
                 />
                 <span>{precioMinimo} €</span>
            </div>
            <div>
                <label htmlFor={filtroCategoriaId}>Category</label>
                <select name="category" id={filtroCategoriaId} onChange={hamdleCambioCategoria}>
                    <option value="all">All</option>
                    <option value="laptops">Laptops</option>
                    <option value="home-decoration">Home Decoration</option>
                    <option value="groceries">Groceries</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}