import type { Film } from '../types'

type FilmCardProps = {
  film: Film
}

function FilmCard({ film }: FilmCardProps) {
  return (
    <article className="film-card">
      <img src={film.image} alt={`${film.title} poster`} />
      <h2>{film.title}</h2>
      <p>{film.release_date}</p>
    </article>
  )
}

export default FilmCard
