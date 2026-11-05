import { useState } from 'react'
import type { Film } from './types'
import filmsData from './data/films.json'
import FilmList from './components/FilmList'

function App() {
  const [films] = useState<Film[]>(filmsData)

  return (
    <main>
      <h1>Ghibli Films</h1>
      <FilmList films={films} />
    </main>
  )
}

export default App
