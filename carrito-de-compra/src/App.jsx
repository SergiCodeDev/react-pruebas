import { products as productosIniciales } from "./mocks/productos.json"
import { Productos } from "./components/Productos.jsx"
import { useState } from "react"
import { Header } from "./components/Header.jsx"

function App() {
  const [productos] = useState(productosIniciales)
  const [filtros, setFiltros] = useState({
    category: "all",
    minPrice: 0
  })

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

  const productosFiltrados = filtroProductos(productos)

  return (
    <>
      <Header />
      <Productos productos={productosFiltrados} />
    </>
  )
}

export default App
