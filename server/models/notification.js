const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  medicineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medicine',  // Reference to the Medicine model
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['unread', 'read'], // Define possible statuses
    default: 'unread',  // Default status is unread
  },
});

module.exports = mongoose.model('Notification', notificationSchema);
