import conResultado from "../mocks/resultados.json"
import resultadoMalo from "../mocks/no-resultados.json"
import { useState } from "react"

const API_KEY = "tuclave"

// https://www.omdbapi.com/?apikey=${API_KEY}&s=Avengers

export function usePeliculas({ buscador }) {
  const [responsePeliculas, setResponsePeliculas] = useState([])

  const peliculas = responsePeliculas.Search

  const mapearPeliculas = peliculas?.map(pelicula => ({
    id: pelicula.imdbID,
    title: pelicula.Title,
    year: pelicula.Year,
    poster: pelicula.Poster
  }))

  const getPeliculas = () => {
    if (buscador) {
      // setResponsePeliculas(conResultado)
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${buscador}`)
      .then(res => res.json())
      .then(json => {
        setResponsePeliculas(json)
      })
    } else {
      setResponsePeliculas(resultadoMalo)
    }

  }

  return { peliculas: mapearPeliculas, getPeliculas }
}