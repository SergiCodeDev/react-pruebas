import { useState } from "react"
import { buscarPeliculas } from "../services/peliculas.js"

export function usePeliculas({ buscador }) {
  const [peliculas, setPeliculas] = useState([])

  const getPeliculas = async () => {
    const newPeliculas = await buscarPeliculas({buscador})
    setPeliculas(newPeliculas)
  }

  return { peliculas , getPeliculas }
}