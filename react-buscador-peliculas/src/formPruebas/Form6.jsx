import './App.css'
import { usePeliculas } from './hooks/usePeliculas.js'
import { Peliculas } from './components/Peliculas.jsx'
import { useEffect, useRef } from 'react'
import { useState } from 'react'

function App() {
  const { peliculas } = usePeliculas()
  const [buscador , setBuscador] = useState("")
  const [error, setError] = useState(null)


  const contador = useRef(0) // valor que persiste entre renders
  contador.current++
  console.log(contador)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ buscador })
  }

  const handleChange = (e) => {
    const nuevoBuscador = e.target.value
    if (nuevoBuscador.startsWith(" ")) return
    setBuscador(e.target.value)
  }

  useEffect(()=> {
    if(buscador == "") {
      setError("No se puede buscar una película vacía")
      return
    }

    if(buscador.match(/^\d+$/)){
      setError("No se puede buscar una película con un número")
      return
    }

    if (buscador.length < 3) {
      setError("Las busqueda debe tener al menos de 3 número")
      return
    }

    setError(null)
  }, [buscador])

  return (
    <>
      <header className='my-header'>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={buscador} 
          style={{border:"1px solid var(--focus)", borderColor: error ? "red" : "var(--focus)", boxShadow: error ? "0 0 2px red" : "0 0 2px var(--focus)"}} 
          name='buscador' type="text" placeholder='Nombre pelucula' 
          />
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
