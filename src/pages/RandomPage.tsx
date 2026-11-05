import { useState } from 'react'
import type { Film } from '../types'
import FilmCard from '../components/FilmCard'

type RandomPageProps = {
  films: Film[]
}

function RandomPage({ films }: RandomPageProps) {
  const [picked, setPicked] = useState<Film | null>(null)

  function pickRandom() {
    const index = Math.floor(Math.random() * films.length)
    setPicked(films[index])
  }

  return (
    <>
      <h1>Random film</h1>
      <button type="button" onClick={pickRandom}>
        Pick a random film
      </button>
      {picked ? (
        <div className="random-pick">
          <FilmCard film={picked} />
        </div>
      ) : (
        <p>Click the button to discover a film.</p>
      )}
    </>
  )
}

export default RandomPage
