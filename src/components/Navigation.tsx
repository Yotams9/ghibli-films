import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">Films</NavLink>
      <NavLink to="/stats">Stats</NavLink>
      <NavLink to="/random">Random</NavLink>
    </nav>
  )
}

export default Navigation
