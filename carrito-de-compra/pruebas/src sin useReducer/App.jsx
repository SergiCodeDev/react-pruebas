import { products as productosIniciales } from "./mocks/productos.json"
import { Productos } from "./components/Productos.jsx"
import { Header } from "./components/Header.jsx"
import { Footer } from "./components/Footer.jsx"
import { IS_DEVELOPMENT } from "./config.js"
import { useFiltros } from "./hooks/useFiltros.js"
import { Carrito } from "./components/Carrito.jsx"
import { CarritoProvider } from "./context/carrito.jsx"

function App() {
  const { filtroProductos } = useFiltros()
  const productosFiltrados = filtroProductos(productosIniciales)

  return (
    <CarritoProvider>
      <Header />
      <Carrito />
      <Productos productos={productosFiltrados} />
      {IS_DEVELOPMENT && <Footer />}
    </CarritoProvider>
  )
}

export default App
