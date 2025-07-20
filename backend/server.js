const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const requestRoutes = require('./routes/requestRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const pickupRequestRoutes = require('./routes/pickupRequests');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route registrations
app.use('/api/auth', authRoutes); // Add this if needed
app.use('/api/requests', requestRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/pickup-requests', pickupRequestRoutes); // This should match frontend fetch()

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
})
.catch(err => console.error('❌ MongoDB connection error:', err));
