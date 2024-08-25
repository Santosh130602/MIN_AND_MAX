const express = require('express');
const {submitMedicine, orderStatus} = require('../controllers/userRouterformedicen');

const router = express.Router();

router.post('/submitMedicine', submitMedicine);
router.post('/orderStatus/:id', orderStatus);


module.exports = router;
