import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import type { Film } from './types'
import filmsData from './data/films.json'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import FilmPage from './pages/FilmPage'

function App() {
  const [films] = useState<Film[]>(filmsData)

  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage films={films} />} />
          <Route path="/films/:id" element={<FilmPage films={films} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
