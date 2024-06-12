import { useContext } from "react"
import { FiltrosContext } from "../context/filtros.jsx"

export function useFiltros() {
    /*   const [filtros, setFiltros] = useState({
        category: "all",
        minPrice: 0
      }) */
  
    // const filtros = useContext(FiltrosContext)
    const { filtros, setFiltros } = useContext(FiltrosContext)
  
    const filtroProductos = (productos) => {
      return productos.filter(producto => {
        return (
          producto.price >= filtros.minPrice &&
          (
            filtros.category == "all" ||
            producto.category == filtros.category
          )
        )
      })
    }
  
    return { filtros, filtroProductos, setFiltros }
  }