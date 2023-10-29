import { NavLink } from "react-router-dom";
import "./navbar.css";

function getNavLinkClassNames({ isActive }: { isActive: boolean }) {
  return `nav-link ${isActive ? "nav-link-active" : ""}`;
}

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink to="/" className={getNavLinkClassNames}>
            Dashboard
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/profile" className={getNavLinkClassNames}>
            Profile
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/statements" className={getNavLinkClassNames}>
            Statements
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
