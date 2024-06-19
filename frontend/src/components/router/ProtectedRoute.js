import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  return isLoggedIn ? <Element {...rest} /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
