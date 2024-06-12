import { useFiltros } from '../hooks/useFiltros.js'
import './Footer.css'

export function Footer () {
  const {filtros} = useFiltros()
  return (
    <footer className='footer'>
      {
        JSON.stringify(filtros, null, 2)
      }
    </footer>
  )
}