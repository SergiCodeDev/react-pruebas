import './App.css'
import { usePeliculas } from './hooks/usePeliculas.js'
import { Peliculas } from './components/Peliculas.jsx'
import { useRef } from 'react'
import { useState } from 'react'

function App() {
  const { peliculas } = usePeliculas()
  // forma controlada react (inputs) pero más lenta
  const [buscador , setBuscador] = useState("")
  /*   
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    console.log(value)
  } 
  */
  const handleSubmit = (e) => {
    e.preventDefault()
    /* 
      const fields = new window.FormData(e.target)
      const buscador = fields.get("buscador")
      console.log(buscador)
    */
    // importante, puedes recuperar todos los imput de un formulario por su name
    // const { buscador } = Object.fromEntries(new window.FormData(e.target))
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
          <input onChange={handleChange} value={buscador} name='buscador'/* ref={inputRef} */ type="text" placeholder='Nombre pelucula' />
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