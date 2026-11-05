type SearchBarProps = {
  query: string
  director: string
  directors: string[]
  onQueryChange: (query: string) => void
  onDirectorChange: (director: string) => void
}

function SearchBar({
  query,
  director,
  directors,
  onQueryChange,
  onDirectorChange,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search by title"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <select value={director} onChange={(e) => onDirectorChange(e.target.value)}>
        <option value="">All directors</option>
        {directors.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar
