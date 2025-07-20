import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/requests')
      .then((r) => r.json())
      .then(setRequests);
  }, []);

  const updateStatus = (id, status) => {
    fetch(`http://localhost:5000/api/requests/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
      .then((r) => r.json())
      .then((updated) => {
        setRequests((prev) =>
          prev.map((r) => (r._id === updated._id ? updated : r))
        );
      });
  };

  return (
    <ul>
      {requests.map((r) => (
        <li key={r._id}>
          {r.materialType} – {r.quantity} – {r.pickupAddress} – <b>{r.status}</b>
          {r.status === 'pending' && (
            <>
              <button onClick={() => updateStatus(r._id, 'scheduled')}>Schedule</button>
              <button onClick={() => updateStatus(r._id, 'completed')}>Complete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default AdminDashboard;
