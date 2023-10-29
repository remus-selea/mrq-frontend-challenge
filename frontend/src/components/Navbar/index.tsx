import { NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/statements">Statements</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
