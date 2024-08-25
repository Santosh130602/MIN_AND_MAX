// // const express = require('express');
// // const router = express.Router();
// // const Medicine = require('../models/usermedicenform');
// // const Notification = require('../models/notificationModel');

// // // User submits a medicine order
// // router.post('/submitMedicine', async (req, res) => {
// //   const newMedicine = new Medicine({
// //     ...req.body,
// //   });

// //   try {
// //     await newMedicine.save();
// //     const notification = new Notification({
// //       userId: req.body.userId,
// //       medicineId: newMedicine._id,
// //       message: 'New medicine order submitted',
// //     });
// //     await notification.save();
// //     res.status(200).json({ message: 'Order submitted successfully!' });
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to submit order' });
// //   }
// // });

// // // User views order status
// // router.get('/orderStatus/:id', async (req, res) => {
// //   try {
// //     const medicine = await Medicine.findById(req.params.id);
// //     res.status(200).json({ status: medicine.status });
// //   } catch (error) {
// //     res.status(500).json({ error: 'Failed to fetch order status' });
// //   }
// // });

// // module.exports = router;








// const express = require('express');
// const router = express.Router();
// const Medicineform = require('../models/usermedicenform');

// const Notification = require('../models/notification');

// // User submits a medicine order
// // router.post('/submitMedicine', async (req, res) => {

//   const submitMedicine = async (req, res) => {
//   const newMedicine = new Medicineform({
//     ...req.body,
//   });

//   try {
//     await newMedicine.save();
//     const notification = new Notification({
//       userId: req.body.userId,
//       medicineId: newMedicine._id,
//       message: 'New medicine order submitted',
//     });
//     await notification.save();
//     res.status(200).json({ message: 'Order submitted successfully!' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to submit order' });
//   }
// };

// // User views order status
// // router.get('/orderStatus/:id', async (req, res) => {

//   const orderStatus = async (req, res) => {
//   try {
//     const medicine = await Medicineform.findById(req.params.id);
//     res.status(200).json({ status: medicine.status });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch order status' });
//   }
// };

// module.exports = { submitMedicine, orderStatus};