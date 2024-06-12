import { Filtros } from "./Filtros.jsx"

export function Header ({cambiarFiltros}) {
    return (
        <header>
            <h1>React Shop</h1>
            <Filtros onChange={cambiarFiltros}/>
        </header>
    )
}