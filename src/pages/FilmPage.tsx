import { Link, useParams } from 'react-router-dom'
import type { Film } from '../types'
import NotFoundPage from './NotFoundPage'

type FilmPageProps = {
  films: Film[]
}

function FilmPage({ films }: FilmPageProps) {
  const { id } = useParams()
  const film = films.find((f) => f.id === id)

  if (!film) {
    return <NotFoundPage />
  }

  return (
    <article className="film-page">
      <h1>{film.title}</h1>
      <p className="original-title">{film.original_title}</p>
      <img src={film.image} alt={`${film.title} poster`} />
      <p>{film.description}</p>
      <dl>
        <dt>Director</dt>
        <dd>{film.director}</dd>
        <dt>Producer</dt>
        <dd>{film.producer}</dd>
        <dt>Year</dt>
        <dd>{film.release_date}</dd>
        <dt>Running time</dt>
        <dd>{film.running_time} min</dd>
        <dt>RT score</dt>
        <dd>{film.rt_score}</dd>
      </dl>
      <Link to="/">Back to all films</Link>
    </article>
  )
}

export default FilmPage
