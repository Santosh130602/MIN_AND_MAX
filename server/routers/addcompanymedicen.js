

const express = require('express');
const { addMedicine } = require('../controllers/addcompanymedicen');
const {CheckMedicens} = require("../controllers/checkMedicen")
const {getAllCompanyMedicines} = require("../controllers/getAllcompanymedicen")


const router = express.Router();

router.post('/addmedicine', addMedicine);
router.post('/scan', CheckMedicens);
router.get('/getallmedicines', getAllCompanyMedicines);
module.exports = router;

