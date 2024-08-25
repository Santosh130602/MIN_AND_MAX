const express = require('express');
const router = express.Router();
const Notification = require('../models/notificationModel');
const Medicine = require('../models/medicineModel');

// Admin views notifications
router.get('/notifications', async (req, res) => {
  try {
    const notifications = await Notification.find().populate('medicineId');
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// Admin updates medicine status
router.patch('/updateMedicine/:id', async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(req.params.id, {
      status: req.body.status,
    });
    await Notification.findOneAndUpdate({ medicineId: req.params.id }, { status: 'read' });
    res.status(200).json({ message: `Order ${req.body.status} successfully!` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update status' });
  }
});

module.exports = router;
