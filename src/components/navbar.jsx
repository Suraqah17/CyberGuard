import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './navbar.css'; // Import your CSS file for styling
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="rectangle">
        <Link to="/" className="special-button"> {/* Link to the home page */}
          <FaHome className="icon" />
        </Link>
        <Link to="/regcomp" className="text-button">REGISTER A COMPLAINT</Link>
        <button className="text-button">RESOURCES</button>
        <button className="text-button">NEWS</button>
        <button className="text-button">FAQs</button>
        <button className="text-button">CONTACT US</button>
      </div>
    </nav>
  );
}

export default Navbar;
