
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Ensure the import is correct

const AddMedicineForm = () => {
    const [token, setToken] = useState(null);
    
    const [medicineData, setMedicineData] = useState({
        name: '',
        salts: '',
        madeForDate: '',
        expireDate: '',
        rate: '',
        batchNumber: '',
        unitsPerSheet: '',
        companyName: '',  
    });

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            try {
                const decodedToken = jwtDecode(storedToken);
                setToken(storedToken);
                // Pre-fill companyName from token if it exists
                setMedicineData(prevData => ({
                    ...prevData,
                    companyName: decodedToken.username || '',
                }));
            } catch (error) {
                console.error('Invalid token', error);
            }
        }    
    }, []);

    const handleChange = (e) => {
        setMedicineData({
            ...medicineData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/company/addmedicine', medicineData);
            alert('Medicine added successfully!');
            setMedicineData({
                name: '',
                salts: '',
                madeForDate: '',
                expireDate: '',
                rate: '',
                batchNumber: '',
                unitsPerSheet: '',
                companyName: '', // Reset companyName on form submit
            });
        } catch (error) {
            console.error('There was an error adding the medicine:', error);
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Add New Medicine</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        value={medicineData.companyName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Medicine Name</label>
                    <input
                        type="text"
                        name="name"
                        value={medicineData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Salts</label>
                    <input
                        type="text"
                        name="salts"
                        value={medicineData.salts}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Made For Date</label>
                    <input
                        type="date"
                        name="madeForDate"
                        value={medicineData.madeForDate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Expire Date</label>
                    <input
                        type="date"
                        name="expireDate"
                        value={medicineData.expireDate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Rate</label>
                    <input
                        type="number"
                        name="rate"
                        value={medicineData.rate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Batch Number</label>
                    <input
                        type="text"
                        name="batchNumber"
                        value={medicineData.batchNumber}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Units Per Sheet</label>
                    <input
                        type="number"
                        name="unitsPerSheet"
                        value={medicineData.unitsPerSheet}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Add Medicine
                </button>
            </form>
        </div>
    );
};

export default AddMedicineForm;
