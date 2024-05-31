
function ListaDePeliculas({ peliculas }) {
    return (
        <ul>
        {
          peliculas.map(pelicula => (
            <li key={pelicula.imdbID}>
              <h3>{pelicula.Title}</h3>
              <p>{pelicula.Year}</p>
              <img src={pelicula.Poster}
                alt={`Foto de la portada de ${pelicula.Title}`}
              />
            </li>
          ))
        }
      </ul>
    )
}

function NoHayListaDePeliculas() {
    return <p>No se encontraron resultados</p>
}

export function Peliculas({peliculas}) {
    const peliculas = resultadoOk.Search
    const hayPelicula = peliculas?.length > 0

    return (
        hayPelicula 
        ? <ListaDePeliculas peliculas={peliculas} /> 
        : <NoHayListaDePeliculas />
    )
}