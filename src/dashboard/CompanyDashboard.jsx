
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const CompanyDashboard = () => {
    const navigate = useNavigate();


    const [token, setToken] = useState(null);
    const [companyName, setCompanyName] = useState('');

    

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            try {
                const decodedToken = jwtDecode(storedToken);
                setCompanyName(decodedToken.username); 
                // setMedicineData((prevData) => ({
                //     ...prevData,
                //     companyName: decodedToken.username,
                // }));
                setToken(storedToken); 
            } catch (error) {
                console.error('Invalid token', error);
            }
        }    
    }, []);
    
    console.log(companyName)

    
        const handleAddmedicen = () =>{
        navigate('/add-medicen')
    }

    const handlerContract = () =>{
        navigate('/company-contract')
    }

    return (
        <div className="flex h-screen">
            {/* Left Sidebar - 30% width */}
            <div className="w-1/3 bg-gray-800 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Company Dashboard</h2>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600" onClick={handleAddmedicen}>
                                Add Medicines
                            </button>
                        </li>
                        <li className="mb-4">
                            <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600" onClick={handlerContract}>
                                Contracts
                            </button>
                        </li>
                        <li className="mb-4">
                            <button className="w-full text-left p-2 bg-gray-700 rounded hover:bg-gray-600">
                                Reports
                            </button>
                        </li>
                        {/* Add more buttons as needed */}
                    </ul>
                </nav>
            </div>

            {/* Main Content - 70% width */}
            <div className="w-2/3 p-8">
                <h1 className="text-3xl font-bold">
                    Welcome to {companyName} Dashboard
                </h1>
                <p className="mt-4">
                    This is where you can manage all company-related tasks, view reports, and more.
                </p>
                {/* Add more content here */}
            </div>
        </div>
    );
};

export default CompanyDashboard;

