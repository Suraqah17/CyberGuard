import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="button-container">
        <button className="footer-button">Feedback</button>
        <div className="divider"></div>
        <button className="footer-button">FAQ</button>
        <div className="divider"></div>
        <button className="footer-button">Contact Us</button>
        <div className="divider"></div>
        <button className="footer-button">Disclaimer</button>
        <div className="divider"></div>
        <button className="footer-button">Privacy Policy</button>
      </div>
    </footer>
  );
};

export default Footer;
