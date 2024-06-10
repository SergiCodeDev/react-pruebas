import './App.css'
import { usePeliculas } from './hooks/usePeliculas.js'
import { Peliculas } from './components/Peliculas.jsx'
import { useEffect, useRef } from 'react'
import { useState } from 'react'

function useBuscador() {
  const [buscador, setBuscador] = useState("")
  const [error, setError] = useState(null)
  const esElPrimerInput = useRef(true)

  useEffect(() => {
    if (esElPrimerInput.current) {
      esElPrimerInput.current = buscador === ""
      return
    }

    if (buscador == "") {
      setError("No se puede buscar una película vacía")
      return
    }

    if (buscador.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número")
      return
    }

    if (buscador.length < 3) {
      setError("Las busqueda debe tener al menos de 3 número")
      return
    }

    setError(null)
  }, [buscador])

  return { buscador, setBuscador, error }
}

function App() {
  const [ordenar, setOrdenar] = useState(false)
  const { buscador, setBuscador, error } = useBuscador()
  const { peliculas, getPeliculas, cargando } = usePeliculas({ buscador, ordenar })


  const handleSubmit = (e) => {
    e.preventDefault()
    getPeliculas({ buscador })
  }

  const handleOrdenar = () => {
    setOrdenar(!ordenar)
  }

  const handleChange = (e) => {
    setBuscador(e.target.value)
  }



  return (
    <>
      <header className='my-header'>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={buscador}
            style={{ border: "1px solid var(--focus)", borderColor: error ? "red" : "var(--focus)", boxShadow: error ? "0 0 2px red" : "0 0 2px var(--focus)" }}
            name='buscador' type="text" placeholder='Nombre pelucula'
          />
          <input type="checkbox" onChange={handleOrdenar} checked={ordenar} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </header>
      <main className='container-peliculas'>
        {
          cargando ? <p>Cargando...</p> : <Peliculas peliculas={peliculas} />
        }
      </main>
    </>
  )
}

export default App
