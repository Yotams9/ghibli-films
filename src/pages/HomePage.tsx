import { useState } from 'react'
import type { Film } from '../types'
import { filterFilms } from '../utils/filterFilms'
import SearchBar from '../components/SearchBar'
import FilmList from '../components/FilmList'

type HomePageProps = {
  films: Film[]
}

function HomePage({ films }: HomePageProps) {
  const [query, setQuery] = useState('')
  const [director, setDirector] = useState('')

  const directors = [...new Set(films.map((film) => film.director))]
  const filtered = filterFilms(films, query, director)

  return (
    <>
      <h1>Ghibli Films</h1>
      <SearchBar
        query={query}
        director={director}
        directors={directors}
        onQueryChange={setQuery}
        onDirectorChange={setDirector}
      />
      {filtered.length === 0 ? (
        <p>No films found</p>
      ) : (
        <FilmList films={filtered} />
      )}
    </>
  )
}

export default HomePage
