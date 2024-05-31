import './App.css'
import resultadoOk from "./mocks/resultados.json"
import resultadoMalo from "./mocks/no-resultados.json"
import { Peliculas } from './components/Peliculas'

const API_KEY = "4287ad07"


// https://www.omdbapi.com/?apikey=4287ad07&s=Avengers

function App() {


  return (
    <>
      <header className='my-header'>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input type="text" placeholder='Nombre pelucula' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main className='container-peliculas'>
        <Peliculas peliculas={resultadoOk} />
      </main>
    </>
  )
}

export default App
