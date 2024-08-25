

import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', formData);
            const { accountType } = response.data;

            // Store the user info or token in localStorage
            localStorage.setItem('userInfo', JSON.stringify(response.data));

            // Redirect to the appropriate dashboard
            if (accountType === 'Admin') {
                navigate('/admin-dashboard');
            } else if (accountType === 'Company') {
                navigate('/company-dashboard');
            } else {
                navigate('/user-dashboard');
            }
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={onSubmit}>
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
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center">
                Didn't have account? <Link to="/signup" className="text-blue-500 hover:underline">Signup</Link>
            </p>
            </div>
        </div>
    );
};

export default Login;
