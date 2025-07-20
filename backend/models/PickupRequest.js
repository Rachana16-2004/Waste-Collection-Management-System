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

// ✅ Prevent OverwriteModelError:
module.exports = mongoose.models.PickupRequest || mongoose.model('pickuprequests', PickupRequestSchema);
