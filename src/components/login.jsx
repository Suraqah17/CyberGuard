import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './login.css'; // Import your CSS file for styling

const Login = () => {
  return (
      <div className="login-content">
        <h1>Login</h1>
        <div className="login-form">
          <label>Email<span className="mandatory">*</span></label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password<span className="mandatory">*</span></label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Submit</button>
          <p>Click <Link to="/register">here</Link> to register</p>
        </div>
      </div>
  );
};

export default Login;
