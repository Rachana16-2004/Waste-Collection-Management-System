import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // remove saved login token if any
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/admin">Admin</Link>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </nav>
  );
}

export default Navbar;
