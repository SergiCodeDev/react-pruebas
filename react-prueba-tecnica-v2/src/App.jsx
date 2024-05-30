import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import { Otro } from './components/Otro.jsx'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imagenUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <>
      <main>
        <h1>App de gatitos</h1>
        <button onClick={handleClick}>Nueva Frase</button>
        {fact && <p>{fact}</p>}
        {imagenUrl && <img src={imagenUrl} alt={`Imagen generada con las palabras: ${fact}`}></img>}
        <Otro />
      </main>
    </>
  )
}

export default App
