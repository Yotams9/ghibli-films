import { describe, it, expect } from 'vitest'
import type { Film } from '../types'
import { computeStats } from './computeStats'

function makeFilm(
  id: string,
  director: string,
  rt_score: string,
  running_time: string,
): Film {
  return {
    id,
    title: `Film ${id}`,
    original_title: 'orig',
    original_title_romanised: 'rom',
    image: 'img',
    movie_banner: 'banner',
    description: 'desc',
    director,
    producer: 'prod',
    release_date: '2000',
    running_time,
    rt_score,
  }
}

const films: Film[] = [
  makeFilm('1', 'Hayao Miyazaki', '95', '124'),
  makeFilm('2', 'Hayao Miyazaki', '97', '125'),
  makeFilm('3', 'Isao Takahata', '100', '89'),
]

describe('computeStats', () => {
  it('counts films per director', () => {
    expect(computeStats(films).filmsPerDirector).toEqual({
      'Hayao Miyazaki': 2,
      'Isao Takahata': 1,
    })
  })

  it('averages rt_score rounded to one decimal', () => {
    expect(computeStats(films).averageScore).toBe(97.3)
    expect(computeStats([]).averageScore).toBe(0)
  })

  it('finds the film with the longest running time', () => {
    expect(computeStats(films).longestFilm?.id).toBe('2')
    expect(computeStats([]).longestFilm).toBeNull()
  })
})
