import './App.css'
import { usePeliculas } from './hooks/usePeliculas.js'
import { Peliculas } from './components/Peliculas.jsx'

function App() {
  const { peliculas } = usePeliculas()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* 
      const fields = new window.FormData(e.target)
      const buscador = fields.get("buscador")
      console.log(buscador)
    */
    // importante, puedes recuperar todos los imput de un formulario por su name
    const { buscador } = Object.fromEntries(new window.FormData(e.target))
    console.log({ buscador })
  }

  return (
    <>
      <header className='my-header'>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='buscador' type="text" placeholder='Nombre pelucula' />
          <input name='uno' type="text" />
          <input name='dos' type="text" />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main className='container-peliculas'>
        <Peliculas peliculas={peliculas} />
      </main>
    </>
  )
}

export default App