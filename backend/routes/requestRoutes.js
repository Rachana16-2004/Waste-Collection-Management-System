const express = require('express');
const router = express.Router();
const PickupRequest = require('../models/PickupRequest'); // Make sure this model exists

// POST /api/request-pickup
router.post('/request-pickup', async (req, res) => {
  try {
    const { material, quantity, address } = req.body;
    const newRequest = new PickupRequest({ material, quantity, address });
    await newRequest.save();
    res.status(201).json({ message: 'Pickup request submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit request', error: err.message });
  }
});

// GET /api/requests
router.get('/requests', async (req, res) => {
  try {
    const requests = await PickupRequest.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch requests', error: err.message });
  }
});

module.exports = router;
