import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import './App.css';
import PickupRequestForm from './components/PickupRequestForm';
import AdminLoginPage from './pages/AdminLoginPage';
import PickupRequestsPage from './pages/PickupRequestsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/admin" element={<AdminLoginPage />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request-pickup" element={<PickupRequestForm />} />
        <Route path='/all-request' element={<PickupRequestsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
