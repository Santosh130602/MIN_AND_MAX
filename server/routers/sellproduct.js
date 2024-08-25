
const express = require('express');
const { createProduct,getAllProducts } = require('../controllers/sellingproduct'); // Ensure this path is correct


const router = express.Router();

router.post('/sellingprodect', createProduct);

router.get('/getallsellingproduct', getAllProducts); 

module.exports = router;









