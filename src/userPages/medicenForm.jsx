


import React, { useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; // Correct import for jwt-decode

const SellingProductForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [units, setUnit] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get token from localStorage
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) {
      try {
        // Decode the token
        const decodedToken = jwtDecode(token);

        // Extract userId and userName from the token
        const userId = decodedToken.id; // Adjust based on actual payload structure
        const userName = decodedToken.username; // Adjust based on actual payload structure

        setUserId(userId);
        setUserName(userName);

        console.log(userId);
        console.log(userName);

        // Prepare form data
        const formData = {
          userId,
          companyName,
          medicineName,
          batchNumber,
          units,
        };

        try {
          const response = await axios.post("http://localhost:4000/api/user/sellingprodect", formData);
          console.log("Product data sent successfully:", response.data);

          // Reset form fields after submission
          setCompanyName("");
          setMedicineName("");
          setBatchNumber("");
          setUnit("");
        } catch (error) {
          console.error("There was an error sending the product data:", error);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Selling Product Form</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Medicine Name:</label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Batch Number:</label>
          <input
            type="text"
            value={batchNumber}
            onChange={(e) => setBatchNumber(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Unit:</label>
          <input
            type="text"
            value={units}
            onChange={(e) => setUnit(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellingProductForm;
