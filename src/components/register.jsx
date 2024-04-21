// Register.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './register.css'; // Import your CSS file for styling

const Register = () => {
  return (
      <div className="register-content">
        <h1>Register</h1>
        <div className="register-form">
          <label>Email<span className="mandatory">*</span></label>
          <input type="email" placeholder="Enter your email" required />
          <label>Phone<span className="mandatory">*</span></label>
          <input type="text" placeholder="Enter your phone number" required />
          <label>State<span className="mandatory">*</span></label>
          <select required>
            <option value="">Select your state</option>
            <option value="MH">Maharashtra</option>
            <option value="GJ">Gujrat</option>
            <option value="RJ">Rajasthan</option>
            <option value="OD">Odisha</option>
            <option value="WB">West Bengal</option>
            <option value="JK">Jammu Kashmir</option>
            <option value="KN">Karnataka</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="TN">Tamil Nadu</option>
          </select>
          <label>Password<span className="mandatory">*</span></label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Submit</button>
          <p>Click <Link to="/login">here</Link> for existing user</p>
        </div>
      </div>
  );
};

export default Register;
