import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts.js'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function useCatImage({ fact }) {
  const [imagenUrl, setImagenUrl] = useState()

  // recuperar la imagen cada vez que hay una frase nueva
  useEffect(() => {
    console.log("hu")
    if (!fact) return

    const tresPalabrasEz = fact.split(" ", 3).join(" ")

    fetch(`https://cataas.com/cat/says/${tresPalabrasEz}?size=50&color=red&json=true`)
      .then(res => {
        if (!res.ok) throw new Error("Error en la API")
        res.json()
      })
      .then(response => {
        const { url } = response
        setImagenUrl(url)
      })
      .catch((err) => {
        console.error(err)
        console.log("Error")
      })

  }, [fact])

  return { imagenUrl }
}

function App() {
  const [fact, setFact] = useState()
  const {imagenUrl} = useCatImage({fact})

  // recuperar frase al cargar la página
  useEffect(() => {
    getRandomFact().then(setFact)
    // getRandomFact().then(newFact =>setFact(newFact)) //lo mismo que arriba
  }, [])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <>
      <main>
        <h1>App de gatitos</h1>
        <button onClick={handleClick}>Nueva Frase</button>
        {fact && <p>{fact}</p>}
        {imagenUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imagenUrl}`} alt={`Imagen generada con las palabras: ${fact}`}></img>}
      </main>
    </>
  )
}

export default App
