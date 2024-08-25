


const Medicine = require('../models/medicen');

const addMedicine = async (req, res) => {
    const { name, salts, madeForDate, expireDate, rate, batchNumber, unitsPerSheet, companyName } = req.body;

    // Logic to add medicine
    try {
        const newMedicine = await Medicine.create({
            name,
            salts,
            madeForDate,
            expireDate,
            rate,
            batchNumber,
            unitsPerSheet,
            companyName
        });
        res.status(201).json(newMedicine);
    } catch (error) {
        res.status(400).json({ message: 'Error adding medicine', error });
    }
};

module.exports = { addMedicine };
