import { useState } from "react"
import { buscarPeliculas } from "../services/peliculas.js"

export function usePeliculas({ buscador }) {
  const [peliculas, setPeliculas] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  const getPeliculas = async () => {
    try {
      setCargando(true)
      setError(null)
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