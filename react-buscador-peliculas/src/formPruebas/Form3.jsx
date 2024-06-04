import './App.css'
import { usePeliculas } from './hooks/usePeliculas.js'
import { Peliculas } from './components/Peliculas.jsx'
import { useRef } from 'react'

function App() {
  const { peliculas } = usePeliculas()
  
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    console.log(value)
  } 

  return (
    <>
      <header className='my-header'>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='buscador' ref={inputRef} type="text" placeholder='Nombre pelucula' />
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