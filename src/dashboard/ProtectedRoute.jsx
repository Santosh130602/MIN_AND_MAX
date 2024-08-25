
import React from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute component to restrict access based on user type
const ProtectedRoute = ({ children, allowedTypes }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!userInfo || !allowedTypes.includes(userInfo.accountType)) {
        // If the user is not authenticated or doesn't have the correct account type, redirect to login
        return <Navigate to="/" replace />;
    }

    return children; // If authorized, render the child components (the protected route)
};

export default ProtectedRoute;
