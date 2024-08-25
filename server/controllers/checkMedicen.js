// // routes/medicine.js

// const express = require('express');
// const Medicine = require('../models/Medicine');


// const CheckMedicens = async(req, res) =>{

//     const { companyName, medicineName, batchNumber } = req.body;

//     try {
//         const medicine = await Medicine.findOne({
//             companyName: companyName,
//             name: medicineName,
//             batchNumber: batchNumber,
//         });

//         if (!medicine) {
//             return res.status(404).json({ message: 'Medicine not found' });
//         }

//         res.json(medicine);
//     } catch (error) {
//         console.error('Error fetching medicine:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };


// module.exports = {CheckMedicens};





const express = require('express');
const Medicine = require('../models/medicen');

const CheckMedicens = async (req, res) => {
    const { companyName, medicineName, batchNumber } = req.body;

    // Input validation
    if (!companyName || !medicineName || !batchNumber) {
        return res.status(400).json({ message: 'Please provide all required fields: companyName, medicineName, and batchNumber' });
    }

    try {
        const medicine = await Medicine.findOne({
            companyName: new RegExp(`^${companyName}$`, 'i'), // Case-insensitive match
            name: new RegExp(`^${medicineName}$`, 'i'),       // Case-insensitive match
            batchNumber: batchNumber,
        });

        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }

        res.json(medicine);
    } catch (error) {
        console.error('Error fetching medicine:', error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};

module.exports = { CheckMedicens };
