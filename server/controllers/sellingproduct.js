const SellingProduct = require('../models/sellingProduct');
const createProduct = async (req, res) => {
  try {
    const { companyName,medicineName, units, batchNumber, userId } = req.body;
    const newSellingProduct = new SellingProduct({
      companyName,
      medicineName,
      batchNumber,
      units,
      userId,
    });
    await newSellingProduct.save();

    res.status(201).json({
      message: "Product data has been saved successfully",
      data: newSellingProduct,
    });
  } catch (error) {
    console.error("Error saving product data:", error);
    res.status(500).json({
      message: "Failed to save product data",
      error: error.message,
    });
  }
};






const getAllProducts = async (req, res) => {
  try {
    const products = await SellingProduct.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createProduct, getAllProducts };





// const SellingProduct = require('../models/SellingProduct');

// const createProduct = async (req, res) => {
//   try {
//     const { companyName, medicineName, batchNumber, units } = req.body;

//     // Ensure req.user exists and contains _id
//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ message: 'Unauthorized: No user information found' });
//     }

//     const product = new SellingProduct({
//       companyName,
//       medicineName,
//       batchNumber,
//       units,
//       userId: req.user._id,
//     });

//     await product.save();

//     console.log('Notification: A new product is available for sale.');

//     res.status(201).json(product);
//   } catch (error) {
//     console.error('Error creating product:', error.message);
//     res.status(500).json({ message: 'Server error, could not create product' });
//   }
// };

// const getAllProducts = async (req, res) => {
//   try {
//     const products = await SellingProduct.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     console.error('Error fetching products:', error.message);
//     res.status(500).json({ message: 'Server error, could not fetch products' });
//   }
// };

// module.exports = { createProduct, getAllProducts };
