import { products as productosIniciales } from "./mocks/productos.json"
import { Productos } from "./components/Productos.jsx"
import { useState } from "react"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from "./config.js"

function useFiltros () {
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

  return {filtros, filtroProductos, setFiltros}
}

function App() {
  const [productos] = useState(productosIniciales)
  const {filtros, filtroProductos , setFiltros} = useFiltros()
  const productosFiltrados = filtroProductos(productos)

  return (
    <>
      <Header cambiarFiltros={setFiltros}/>
      <Productos productos={productosFiltrados} />
      {IS_DEVELOPMENT && <Footer filtros={filtros}/>}
    </>
  )
}

export default App
