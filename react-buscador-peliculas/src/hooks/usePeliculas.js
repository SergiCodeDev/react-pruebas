import resultadoOk from "../mocks/resultados.json"
import resultadoMalo from "../mocks/no-resultados.json"

export function usePeliculas(){
    const peliculas = resultadoOk.Search
  
    const mapearPeliculas = peliculas?.map(pelicula => ({
      id: pelicula.imdbID,
      title: pelicula.Title,
      year: pelicula.Year,
      poster: pelicula.Poster
    }))
  
    return {peliculas: mapearPeliculas}
  }