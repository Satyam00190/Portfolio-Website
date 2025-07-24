import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaUserCircle, FaBars } from 'react-icons/fa';
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
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-brand" aria-label="Go to Home">
        <FaUserCircle size={28} color="#fff" style={{marginRight: 10}} />
        <span className="navbar-logo-text gradient-text">SATYANAND YADAV</span>
      </a>
      <button className={`navbar-toggle${menuOpen ? ' open' : ''}`} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}> 
        {navItems.map(item => (
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