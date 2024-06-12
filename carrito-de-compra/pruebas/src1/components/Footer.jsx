import './Footer.css'

export function Footer ({filtros}) {
  return (
    <footer className='footer'>
      {
        JSON.stringify(filtros, null, 2)
      }
    </footer>
  )
}