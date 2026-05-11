import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>MyPortfolio</h2>
      {/* <li onClick={() => console.log("clicked")}>Test Click</li> */}

      <ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/Skills">Skills</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;