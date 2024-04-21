import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import logo from 'C:/Users/sudee/Desktop/PBL2/cyberguard/src/assets/logo.png'; // Importing the image
import './header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/" className="logo-link"> {/* Link to the home page */}
          <img src={logo} alt="Logo" className="logo-image" /> {/* Using imported image */}
        </Link>
        <h4 className="header-text">Incident Response Portal for Cybercrime Reporting and Mitigation</h4>
      </div>
      <div className="buttons-container">
        <Link to="/register" className="register-button">REGISTER</Link> {/* Use Link for navigation */}
        <Link to="/login" className="login-button">LOGIN</Link> {/* Use Link for navigation */}
      </div>
    </header>
  );
}

export default Header;
