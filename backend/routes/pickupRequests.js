const mongoose = require('mongoose');

const PickupRequestSchema = new mongoose.Schema({
  material: String,
  quantity: Number,
  address: String,
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  },
});

module.exports = mongoose.model('PickupRequest', PickupRequestSchema);
