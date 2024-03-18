// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminPanel from './Components/Pages/Admin Panel/AdminPanel';

const PrivateRoute = ({isAuthenticated}) => {
    console.log(isAuthenticated.isAdmin)
  return isAuthenticated.isAdmin ? <AdminPanel/> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
