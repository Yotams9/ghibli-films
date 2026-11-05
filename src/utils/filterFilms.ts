import type { Film } from '../types'

export function filterFilms(
  films: Film[],
  query: string,
  director: string,
): Film[] {
  const q = query.toLowerCase()
  return films.filter(
    (film) =>
      film.title.toLowerCase().includes(q) &&
      (director === '' || film.director === director),
  )
}
