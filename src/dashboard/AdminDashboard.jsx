
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const AdminDashboard = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Assuming the token is stored in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            // Decode the token to get the username
            const decodedToken = jwtDecode(token);
            setUsername(decodedToken.username || 'Admin'); // Fallback to 'Admin' if username not found
        }
    }, []);

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-6">Admin {username}</h2>
                <nav>
                    <ul>
                        

                        <li className="mb-4">
                            <Link to="/company-order" className="text-lg hover:text-gray-300">
                                Company Order
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/manage-company" className="text-lg hover:text-gray-300">
                                Manage Company
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin/notification" className="text-lg hover:text-gray-300" >
                               Manage Users
                            </Link>
                        </li>

                       

                    </ul>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="w-3/4 p-8 bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
                <p>Welcome to the Admin Dashboard, {username}!</p>

                {/* Add your admin-specific content here */}
                <section className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                    {/* Example content */}
                    <div className="bg-white p-4 rounded shadow">
                        <p>No recent activities.</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;

