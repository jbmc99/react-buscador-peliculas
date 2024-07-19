export function ListOfMovies ({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  )
}

export function NoMoviesResults () {
  return (
    <div>
      <h2>No se encontraron resultados</h2>
      <p>Intenta con otra búsqueda</p>
    </div>
  )
}

export function Movies () {
    return {
          hasMovies
            ? renderMovies()
            : renderNoResults()
        }