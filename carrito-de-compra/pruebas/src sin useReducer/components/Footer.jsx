import { useCarrito } from '../hooks/useCarrito.js'
import { useFiltros } from '../hooks/useFiltros.js'
import './Footer.css'

export function Footer() {
  const { filtros } = useFiltros()
  const { carrito } = useCarrito()
  return (
    <footer className='footer'>
      {
        JSON.stringify(filtros, null, 2)
      }
        <br />
      {
        /* JSON.stringify(carrito, null, 2) */
      }
    </footer>
  )
}