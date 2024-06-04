import './App.css'
import { usePeliculas } from './hooks/usePeliculas.js'
import { Peliculas } from './components/Peliculas.jsx'
import { useEffect, useRef } from 'react'
import { useState } from 'react'

function App() {
  const { peliculas } = usePeliculas()
  const [buscador , setBuscador] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ buscador })
  }

  const handleChange = (e) => {
    const nuevoBuscador = e.target.value
    if (nuevoBuscador.startsWith(" ")) return
    setBuscador(nuevoBuscador)
    if(nuevoBuscador == "") {
        setError("No se puede buscar una película vacía")
        return
      }
  
      if(nuevoBuscador.match(/^\d+$/)){
        setError("No se puede buscar una película con un número")
        return
      }
  
      if (nuevoBuscador.length < 3) {
        setError("Las busqueda debe tener al menos de 3 número")
        return
      }
  
      setError(null)
  }

  return (
    <>
      <header className='my-header'>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={buscador} name='buscador' type="text" placeholder='Nombre pelucula' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:"red", textAlign:"center"}}>{error}</p>}
      </header>
      <main className='container-peliculas'>
        <Peliculas peliculas={peliculas} />
      </main>
    </>
  )
}

export default App