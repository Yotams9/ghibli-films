import { Link } from 'react-router-dom'
import type { Film } from '../types'

type FilmCardProps = {
  film: Film
}

function FilmCard({ film }: FilmCardProps) {
  return (
    <Link to={`/films/${film.id}`} className="film-card">
      <img src={film.image} alt={`${film.title} poster`} />
      <h2>{film.title}</h2>
      <p>{film.release_date}</p>
    </Link>
  )
}

export default FilmCard
