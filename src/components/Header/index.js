import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="unorder">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)
export default Header
