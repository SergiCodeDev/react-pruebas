
function ListaDePeliculas({ peliculas }) {
    return (
        <ul className="peliculas">
        {
          peliculas.map(pelicula => (
            <li className="pelicula" key={pelicula.id}>
              <h3>{pelicula.title}</h3>
              <p>{pelicula.year}</p>
              <img src={pelicula.poster}
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
    const hayPelicula = peliculas?.length > 0

    return (
        hayPelicula 
        ? <ListaDePeliculas peliculas={peliculas} /> 
        : <NoHayListaDePeliculas />
    )
}