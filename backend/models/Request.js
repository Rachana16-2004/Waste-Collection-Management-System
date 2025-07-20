const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  materialType: String,
  quantity: String,
  pickupAddress: String,
  status: {
    type: String,
    enum: ['pending', 'scheduled', 'completed'],
    default: 'pending',
  },
});

module.exports = mongoose.model('requests', requestSchema);
