import { products as productosIniciales } from "./mocks/productos.json"
import { Productos } from "./components/Productos.jsx"
import { useState } from "react"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from "./config.js"
import { useFiltros } from "./hooks/useFiltros.js"

function App() {
  const { filtroProductos } = useFiltros()
  const productosFiltrados = filtroProductos(productosIniciales)

  return (
    <>
      <Header />
      <Productos productos={productosFiltrados} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
