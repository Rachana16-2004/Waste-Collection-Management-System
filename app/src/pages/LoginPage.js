
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('users');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/dashboard'); // simulate login
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="a.png"
          alt="illustration"
        />
      </div>
      <div className="login-right">
        <h2>Welcome Back :)</h2>
        <p>
          To keep connected with us please login with your personal
          information by email address and password 🔔
        </p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <span className="icon">📧</span>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="options">
            <label><input type="checkbox" /> Remember Me</label>
            <button type="button" className="link-button">Forgot Password?</button>
          </div>

          <button type="submit" className="login-btn">Login Now</button>
          <button type="button" className="create-btn" onClick={() => navigate('/createaccount')}>Create Account</button>
        </form>

        <div className="social-login">
          <p>Or you can join with</p>
          <div className="social-icons">
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
            <img src="https://img.icons8.com/color/48/facebook.png" alt="Facebook" />
            <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
