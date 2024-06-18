import { useState, useId } from "react"
import "./Filtros.css"
import { useFiltros } from "../hooks/useFiltros.js"

export function Filtros () {
    const {filtros, setFiltros} = useFiltros()
    const filtroPrecioMinimoId = useId()
    const filtroCategoriaId = useId()

    const handleCambioPrecioMinimo = (e) => {
        setFiltros(estadoPrevio => ({
            ...estadoPrevio,
            minPrice: e.target.value
        }))
    }

    const hamdleCambioCategoria = (e) => {
        // esta mal
        //pasando fn al estado nativo de react a un componente hijo
        setFiltros(estadoPrevio => ({
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
                value={filtros.minPrice}
                onChange={handleCambioPrecioMinimo}
                 />
                 <span>{filtros.minPrice} €</span>
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