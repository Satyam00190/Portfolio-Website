import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'Resume', to: 'resume' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contacts', to: 'contacts' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleMenu();
  };

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand" aria-label="Go to Home">
        <FaUserCircle size={28} color="#fff" style={{ marginRight: 10 }} />
        <span className="navbar-logo-text gradient-text">SATYANAND YADAV</span>
      </a>

      <div
        className={`navbar-toggle${menuOpen ? ' open' : ''}`}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.to}>
            <ScrollLink
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              tabIndex={0}
              aria-label={`Go to ${item.name}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
