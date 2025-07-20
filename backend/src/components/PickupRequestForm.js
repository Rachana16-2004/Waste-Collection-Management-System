import React, { useState } from 'react'; // Optional for styling
import '../styles/PickupRequestForm.css'; 

function PickupRequestForm() {
  const [materialType, setMaterialType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/request-pickup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          material: materialType,
          quantity,
          address,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Pickup request submitted successfully!');
        setMaterialType('');
        setQuantity('');
        setAddress('');
      } else {
        alert(data.message || 'Submission failed.');
      }
    } catch (error) {
      alert('Failed to connect to the server.');
    }
  };

  return (
    <div className="pickup-form-container">
      <h2>Recyclable Waste Pickup System</h2>
      <form onSubmit={handleSubmit} className="pickup-form">
        <input
          type="text"
          placeholder="Material Type"
          value={materialType}
          onChange={(e) => setMaterialType(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Pickup Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Request Pickup</button>
      </form>
    </div>
  );
}

export default PickupRequestForm;
