import { useState, useEffect } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

 export function useCatImage({ fact }) {
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
  
    return { imagenUrl: `${CAT_PREFIX_IMAGE_URL}${imagenUrl}` }
  }