# Ghibli Films

A master-detail React app for Studio Ghibli films. The home page lists every film with a title search and a director filter, each card opens a detail page, a stats page summarises the catalogue, a random page picks a film for you, and any unknown address lands on a 404 page.

## Pages

| Route | Page | What you see |
|---|---|---|
| `/` | HomePage | All films as cards, a search box for the title and a director select. Both filters apply together. "No films found" when nothing matches. |
| `/films/:id` | FilmPage | Poster, title, original title, description, director, producer, year, running time and Rotten Tomatoes score, with a link back to the list. Unknown id shows the 404 page. |
| `/stats` | StatsPage | Films per director, the average RT score and the longest film (linked to its page). |
| `/random` | RandomPage | A "Pick a random film" button that shows a random film card. |
| `*` | NotFoundPage | "Page not found" with a link back home. |

## Data source

All data comes from the public Studio Ghibli API, `https://ghibliapi.vercel.app/films`. It needs no key and returns 22 films.

The app makes one fetch, inside a `useEffect` in `App.tsx`. The result is held in `useState` and passed to the pages as props. While the request runs a loader is shown, and a failed request shows an error message instead of the pages.

The API returns `rt_score` and `running_time` as strings. They are converted with `Number()` where the stats are calculated.

## Run

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## Test

```bash
npm test
```

```bash
npm run test:ui
```

`npm test` runs 8 Vitest tests on the two pure functions, `filterFilms` and `computeStats`. `npm run test:ui` opens the Vitest UI in the browser.

## Project structure

```
src/
  main.tsx                    Mounts App inside BrowserRouter
  App.tsx                     The single fetch, loading/error state and the Routes
  types.ts                    The Film type
  index.css                   All styles, including the one mobile media query
  components/
    Navigation.tsx            NavLinks to Films, Stats and Random
    FilmList.tsx              Grid of FilmCard for a films array
    FilmCard.tsx              Poster, title and year, linking to the film page
    SearchBar.tsx             Title input and director select
    Loader.tsx                "Loading films…"
    ErrorMessage.tsx          Shows an error message passed in props
  pages/
    HomePage.tsx              Search state, filterFilms and the list
    FilmPage.tsx              Finds the film by useParams and shows its details
    StatsPage.tsx             Calls computeStats and renders the numbers
    RandomPage.tsx            Picks a random film with Math.random
    NotFoundPage.tsx          404 page
  utils/
    filterFilms.ts            Pure filter by title and director
    filterFilms.test.ts       5 tests
    computeStats.ts           Pure stats: per director, average score, longest film
    computeStats.test.ts      3 tests
```

## Tech

React + Vite + TypeScript, React Router for navigation, Vitest for tests. No other libraries, and no `any` anywhere in the code.

## Process

The app was built one task at a time following [tasks.md](tasks.md), with a commit after each task. Planning and review happened in a separate chat; the implementation was done in Claude Code. The product definition is in [PRD.md](PRD.md), and every prompt sent to the agent is logged automatically in [PROMPTS.md](PROMPTS.md).
