// models/Medicine.js

const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    name: { type: String, required: true },
    salts: { type: String, required: true },
    batchNumber: { type: String, required: true },
    madeForDate: { type: Date, required: true },
    expireDate: { type: Date, required: true },
    rate: { type: Number, required: true },
    unitsPerSheet: { type: Number, required: true },
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
