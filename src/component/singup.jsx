




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        accountType: 'User',
        contactNumber: '',
    });

    const { firstName, lastName, email, password, accountType, contactNumber } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to the backend API
            const response = await axios.post('http://localhost:4000/api/auth/signup', formData);

            // Handle success response
            console.log('Signup successful:', response.data);
            alert('Signup successful!');

        } catch (error) {
            // Handle error response
            console.error('Signup failed:', error.response?.data || error.message);
            alert('Signup failed! Please try again.');
        }
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto my-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    placeholder="First Name"
                    className="mb-4 p-2 w-full border rounded"
                />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    placeholder="Last Name"
                    className="mb-4 p-2 w-full border rounded"
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email"
                    className="mb-4 p-2 w-full border rounded"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password"
                    className="mb-4 p-2 w-full border rounded"
                />
                <input
                    type="text"
                    name="contactNumber"
                    value={contactNumber}
                    onChange={onChange}
                    placeholder="Contact Number"
                    className="mb-4 p-2 w-full border rounded"
                />
                <div className="mb-4">
                    <label className="block mb-2">Account Type:</label>
                    <select
                        name="accountType"
                        value={accountType}
                        onChange={onChange}
                        className="p-2 w-full border rounded"
                    >
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Company">Company</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
                    Sign Up
                </button>
            </form>
            <p className="mt-4 text-center">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
