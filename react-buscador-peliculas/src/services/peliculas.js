// API a usar: - https://www.omdbapi.com/
// Consigue la API Key en la propia página web registrando tu email.

const API_KEY = "tu_codigo"

export const buscarPeliculas = async ({ buscador }) => {
    if (buscador === "") return null
    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${buscador}`)
        const json = await response.json()

        const peliculas = json.Search

        return peliculas?.map(pelicula => ({
          id: pelicula.imdbID,
          title: pelicula.Title,
          year: pelicula.Year,
          poster: pelicula.Poster
        }))
    } catch(e) {
        throw new Error("Error al buscar")
    }
}