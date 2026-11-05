import type { Film } from '../types'

export type Stats = {
  filmsPerDirector: Record<string, number>
  averageScore: number
  longestFilm: Film | null
}

export function computeStats(films: Film[]): Stats {
  const filmsPerDirector: Record<string, number> = {}
  let totalScore = 0
  let longestFilm: Film | null = null

  for (const film of films) {
    filmsPerDirector[film.director] = (filmsPerDirector[film.director] ?? 0) + 1
    totalScore += Number(film.rt_score)
    if (
      longestFilm === null ||
      Number(film.running_time) > Number(longestFilm.running_time)
    ) {
      longestFilm = film
    }
  }

  const averageScore =
    films.length === 0 ? 0 : Math.round((totalScore / films.length) * 10) / 10

  return { filmsPerDirector, averageScore, longestFilm }
}
