import { useMemo, useRef, useState } from "react"
import { buscarPeliculas } from "../services/peliculas.js"

export function usePeliculas({ buscador, ordenar }) {
  const [peliculas, setPeliculas] = useState([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)
  const busquedaAnterior = useRef(buscador)

  const getPeliculas = async () => {
    if (buscador === busquedaAnterior.current) return
    try {
      setCargando(true)
      setError(null)
      busquedaAnterior.current = buscador
      const newPeliculas = await buscarPeliculas({ buscador })
      setPeliculas(newPeliculas)
    } catch (e) {
      setError(e.message)
    } finally {
      setCargando(false)
    }

  }

  const ordenarPeliculas = useMemo(() => {
    return ordenar
    ? [...peliculas].sort((a, b) => a.title.localeCompare(b.title))
    : peliculas
  }, [ordenar, peliculas])

  return { peliculas: ordenarPeliculas, getPeliculas, cargando }
}