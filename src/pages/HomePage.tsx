import type { Film } from '../types'
import FilmList from '../components/FilmList'

type HomePageProps = {
  films: Film[]
}

function HomePage({ films }: HomePageProps) {
  return (
    <>
      <h1>Ghibli Films</h1>
      <FilmList films={films} />
    </>
  )
}

export default HomePage
