import React, { useEffect, useState } from 'react';


function PickupRequestsPage() {
const [requests, setRequests] = useState([]);

useEffect(() => {
fetch('http://localhost:5000/api')
.then((res) => res.json())
.then((data) => setRequests(data));
}, []);

return (
<div className="pickup-requests-page">
<h2>All Pickup Requests</h2>
{requests.map((r) => (
<div key={r._id} className="pickup-card">
<div>
<strong>{r.material}</strong> – {r.quantity} units @ {r.address}
</div>
<div>Status: <span className="pickup-status">{r.status}</span></div>
</div>
))}
</div>
);
}
export default PickupRequestsPage;