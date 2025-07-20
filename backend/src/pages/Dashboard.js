import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Dashboard.css';


function Dashboard() {
  const [view, setView] = useState('home');
  const [pickupRequests, setPickupRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPickupRequests = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/pickup-requests');
      const data = await res.json();
      setPickupRequests(data);
    } catch (error) {
      console.error('Failed to fetch pickup requests', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (view === 'requests') {
      fetchPickupRequests();
    }
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'recycle':
        return (
          <div>
            <h2>Recycle Waste Information</h2>
            <ul>
              <li>Plastic – Recyclable</li>
              <li>Glass – Recyclable</li>
              <li>Paper – Recyclable</li>
              <li>Food Waste – Not recyclable</li>
            </ul>
            <button
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
              onClick={() => navigate('/request-pickup')}
            >
              Request Pickup
            </button>
          </div>
        );

      case 'requests':
        return (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Pickup Requests</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              pickupRequests.map((req) => (
                <div
                  key={req._id}
                  style={{
                    background: '#fff',
                    padding: '1rem',
                    margin: '0.5rem 0',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontFamily: 'Arial',
                  }}
                >
                  <span>
                    {req.user} - {req.quantity} - {req.address}
                  </span>
                  <span style={{ color: 'green', fontWeight: 'bold' }}>{req.status}</span>
                  <div>
                    <button style={yellowBtn}>Schedule</button>
                    <button style={grayBtn}>Complete</button>
                    <button style={redBtn}>Cancel</button>
                  </div>
                </div>
              ))
            )}
          </div>
        );

      default:
        return (
          <div>
            <h2>Welcome to the Dashboard!</h2>
            <p>Select a section to view more details.</p>
          </div>
        );
    }
  };

  return (
    <>
      <Navbar />
 <div className="dashboard-container">
  <h1 className="dashboard-header">User Dashboard</h1>
  <div className="dashboard-buttons">

          <button onClick={() => setView('recycle')} style={buttonStyle}>Recycle Waste Info</button>
          <button onClick={() => setView('requests')} style={buttonStyle}>All Pickup Requests</button>
        </div>
        {renderContent()}
      </div>
    </>
  );
}

// ✅ Button styles
const buttonStyle = {
  marginRight: '1rem',
  padding: '10px 20px',
  backgroundColor: '#198754',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const yellowBtn = {
  backgroundColor: '#ffc107',
  border: 'none',
  color: '#fff',
  padding: '5px 10px',
  marginRight: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const grayBtn = {
  backgroundColor: '#e0e0e0',
  border: 'none',
  color: '#000',
  padding: '5px 10px',
  marginRight: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const redBtn = {
  backgroundColor: '#dc3545',
  border: 'none',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Dashboard;
