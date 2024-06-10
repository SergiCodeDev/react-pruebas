import { useState } from "react"
import { buscarPeliculas } from "../services/peliculas.js"

// mala practica a menos que se quiera usar el mismo valor en toda la página...
const busquedaAnterior = ""

export function usePeliculas({ buscador }) {
  const [peliculas, setPeliculas] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  const getPeliculas = async () => {
    if (buscador === busquedaAnterior) return
    try {
      setCargando(true)
      setError(null)
      busquedaAnterior = buscador
      const newPeliculas = await buscarPeliculas({ buscador })
      setPeliculas(newPeliculas)
    } catch (e) {
      setError(e.message)
    } finally {
      setCargando(false)
    }

  }

  return { peliculas, getPeliculas, cargando }
}