

const Medicine = require('../models/medicen');

const getAllCompanyMedicines = async (req, res) => {
try {
  const medicines = await Medicine.find({});
  res.status(200).json(medicines);
} catch (error) {
  console.error('Error fetching medicines:', error);
  res.status(500).json({ message: 'Internal server error' });
}
};

module.exports = {
  getAllCompanyMedicines,
};
