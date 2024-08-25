





const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  medicineName: {
    type: String,
    required: true,
  },
  batchNumber: {
    type: String,
    required: true,
  },
  units: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
   
  },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
}, {
  timestamps: true, 
});

const SellingProduct = mongoose.model('SellingProduct', productSchema);

module.exports = SellingProduct;
