



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageCompany = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/company/getallmedicines');
        setMedicines(response.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    fetchMedicines();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Company - Medicines List</h2>
      <div className="bg-white shadow-md rounded p-4">
        <ul className="divide-y divide-gray-200">
          {medicines.map((medicine) => (
            <li key={medicine._id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{medicine.medicineName}</h3>
                  <p className="text-sm text-gray-500">Company: {medicine.companyName.companyName}</p>
                  <p className="text-sm text-gray-500">Batch Number: {medicine.batchNumber}</p>
                  <p className="text-sm text-gray-500">Units: {medicine.units}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageCompany;
