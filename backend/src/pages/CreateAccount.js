import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('users');

const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Account created successfully!');
      navigate('/');
    } else {
      alert(data.message || 'Signup failed');
    }
  } catch (error) {
    alert('Error signing up');
    console.error(error);
  }
};


  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/a.png" alt="illustration" />
      </div>
      <div className="login-right">
        <h2>Create Your Account</h2>
        <p>Please enter your details to sign up 📧</p>
        <form onSubmit={handleSignup}>
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
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Create Account</button>
          <button type="button" className="create-btn" onClick={() => navigate('/')}>
            Already have an account? Login
          </button>
        </form>

        <div className="social-login">
          <p>Or sign up with</p>
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

export default CreateAccount;
