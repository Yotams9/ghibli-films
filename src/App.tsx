import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import type { Film } from './types'
import Navigation from './components/Navigation'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import HomePage from './pages/HomePage'
import FilmPage from './pages/FilmPage'
import StatsPage from './pages/StatsPage'

function App() {
  const [films, setFilms] = useState<Film[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        return response.json() as Promise<Film[]>
      })
      .then((data) => setFilms(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Navigation />
      <main>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage films={films} />} />
            <Route path="/films/:id" element={<FilmPage films={films} />} />
            <Route path="/stats" element={<StatsPage films={films} />} />
          </Routes>
        )}
      </main>
    </>
  )
}

export default App
