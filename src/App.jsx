import './App.css'
// useRef es un hook que permite crear una referencia mutable que permite durante
// todo el ciclo de vida del componente, util para guardar cualqier valor que puedas mutar
// como un valor, un contador, un elemento del dom... etc
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useState } from 'react'
import { useEffect } from 'react'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
