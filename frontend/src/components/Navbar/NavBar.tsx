import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            Profile
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            to="/statements"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            Statements
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
