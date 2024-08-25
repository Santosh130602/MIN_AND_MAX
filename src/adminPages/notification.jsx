


import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { AiOutlineCloseCircle } from "react-icons/ai";

import { FcApproval } from "react-icons/fc";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/user/getallsellingproduct');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAccept = (id) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [id]: 'accepted',
    }));
    // Additional logic for handling the accept action (e.g., updating the database) can go here.
  };

  const handleReject = (id) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [id]: 'rejected',
    }));
    // Additional logic for handling the reject action (e.g., updating the database) can go here.
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Selling Products</h2>
      <ul className="space-y-4">
        {products.map((product) => (
          <li
            key={product._id}
            className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
          >
            <div className="flex flex-col">
              <span className="font-semibold">Company Name: {product.companyName}</span>
              <span className="font-semibold">Medicine Name: {product.medicineName}</span>
              <span className="text-gray-500">Batch Number: {product.batchNumber}</span>
              <span className="text-gray-500">Units: {product.units}</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleAccept(product._id)}
                className={`px-4 py-2 text-white rounded ${status[product._id] === 'accepted' ? 'bg-green-600' : 'bg-green-500 hover:bg-green-600'}`}
                disabled={status[product._id] === 'accepted' || status[product._id] === 'rejected'}
              >
                {status[product._id] === 'accepted' ? (
                  <>
                    <FcApproval className="inline mr-2" /> Accepted
                  </>
                ) : (
                  <>
                     Accept
                  </>
                )}
              </button>
              <button
                onClick={() => handleReject(product._id)}
                className={`px-4 py-2 text-white rounded ${status[product._id] === 'rejected' ? 'bg-red-600' : 'bg-red-500 hover:bg-red-600'}`}
                disabled={status[product._id] === 'accepted' || status[product._id] === 'rejected'}
              >
                {status[product._id] === 'rejected' ? (
                  <>
                    <AiOutlineCloseCircle className="inline mr-2" /> Rejected
                  </>
                ) : (
                  <>
                     Reject
                  </>
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
