import type { Film } from '../types'
import FilmCard from './FilmCard'

type FilmListProps = {
  films: Film[]
}

function FilmList({ films }: FilmListProps) {
  return (
    <div className="film-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  )
}

export default FilmList
