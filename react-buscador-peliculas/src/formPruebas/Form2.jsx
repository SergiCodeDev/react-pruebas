import './App.css'
import { usePeliculas } from './hooks/usePeliculas.js'
import { Peliculas } from './components/Peliculas.jsx'
import { useState } from 'react'

function App() {
  const { peliculas } = usePeliculas()
  // forma controlada react (inputs) pero más lenta
  const [buscador , setBuscador] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ buscador })
  }

  const handleChange = (e) => {
    setBuscador(e.target.value)
  }

  return (
    <>
      <header className='my-header'>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={buscador} name='buscador' type="text" placeholder='Nombre pelucula' />
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