import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App() {
  const [fact, setFact] = useState()
  const [imagenUrl, setImagenUrl] = useState()

  // mejor separar lo que hace un efecto en funcionalidades
  /* 
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      //.then(data => setFact(data.fact))
      .then(data => {
        const {fact} = data
        setFact(fact)

        // const firsWord = fact.split(" ")[0]
        // console.log(firsWord) //primera palabra

        // split separa el string por espacio en array,
        // slice seleciona de del laposición 0 al 3 
        // y join convierte el array a string con espacio entre las palabras
        // const tresPalabras = fact.split(" ").slice(0, 3).join(" ")
        // console.log(tresPalabras)

        // 3 primeras palabras 
        const tresPalabrasEz = fact.split(" ", 3).join(" ")
        // console.log(tresPalabrasEz)
        fetch(`https://cataas.com/cat/says/${tresPalabrasEz}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          setImagenUrl(url)
        })
      })
  }, [])
  */
  /* 
  useEffect(() => {
    async function getRandomFact(){
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      setFact(json.fact)
    }
    
    getRandomFact()

  }, [])
  */

  // recuperar frase al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

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
      .catch((err)=>{
        console.error(err)
        console.log("Error")
      })

  }, [fact])

  return (
    <>
      <main>
        <h1>App de gatitos</h1>
        {fact && <p>{fact}</p>}
        {imagenUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imagenUrl}`} alt={`Imagen generada con las palabras: ${fact}`}></img>}
      </main>
    </>
  )
}

export default App
