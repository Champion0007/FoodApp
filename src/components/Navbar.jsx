import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`} id="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Foodie</div>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Contact</a>
          </li>
          <li className="navbar-item">
            <a href="/signin" className="navbar-link">Sign In</a>
          </li>
          <li className="navbar-item">
            <a href="/signup" className="navbar-link">Sign Up</a>
          </li>
          <li className="navbar-item">
            <button onClick={toggleDarkMode} className="navbar-dark-mode-toggle">
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;