import { describe, it, expect } from 'vitest'
import type { Film } from '../types'
import { filterFilms } from './filterFilms'

function makeFilm(id: string, title: string, director: string): Film {
  return {
    id,
    title,
    original_title: 'orig',
    original_title_romanised: 'rom',
    image: 'img',
    movie_banner: 'banner',
    description: 'desc',
    director,
    producer: 'prod',
    release_date: '2000',
    running_time: '90',
    rt_score: '80',
  }
}

const films: Film[] = [
  makeFilm('1', 'My Neighbor Totoro', 'Hayao Miyazaki'),
  makeFilm('2', 'Spirited Away', 'Hayao Miyazaki'),
  makeFilm('3', 'Grave of the Fireflies', 'Isao Takahata'),
  makeFilm('4', 'Pom Poko', 'Isao Takahata'),
]

describe('filterFilms', () => {
  it('returns all films when query and director are empty', () => {
    expect(filterFilms(films, '', '')).toEqual(films)
  })

  it('matches films whose title contains the query', () => {
    expect(filterFilms(films, 'Totoro', '').map((f) => f.id)).toEqual(['1'])
  })

  it('ignores letter case in the query', () => {
    expect(filterFilms(films, 'sPIRITED', '').map((f) => f.id)).toEqual(['2'])
  })

  it('keeps only films by the selected director', () => {
    expect(filterFilms(films, '', 'Isao Takahata').map((f) => f.id)).toEqual([
      '3',
      '4',
    ])
  })

  it('applies title query and director together', () => {
    expect(filterFilms(films, 'pom', 'Isao Takahata').map((f) => f.id)).toEqual([
      '4',
    ])
    expect(filterFilms(films, 'pom', 'Hayao Miyazaki')).toEqual([])
  })
})
