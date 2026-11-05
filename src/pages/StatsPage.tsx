import { Link } from 'react-router-dom'
import type { Film } from '../types'
import { computeStats } from '../utils/computeStats'

type StatsPageProps = {
  films: Film[]
}

function StatsPage({ films }: StatsPageProps) {
  const { filmsPerDirector, averageScore, longestFilm } = computeStats(films)

  return (
    <>
      <h1>Stats</h1>
      <h2>Films per director</h2>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Director</th>
            <th>Films</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(filmsPerDirector).map(([director, count]) => (
            <tr key={director}>
              <td>{director}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Average RT score</h2>
      <p>{averageScore}</p>
      <h2>Longest film</h2>
      {longestFilm ? (
        <p>
          <Link to={`/films/${longestFilm.id}`}>{longestFilm.title}</Link> (
          {longestFilm.running_time} min)
        </p>
      ) : (
        <p>No films</p>
      )}
    </>
  )
}

export default StatsPage
