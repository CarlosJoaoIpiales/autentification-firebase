// src/components/ProtectedRoute.jsx
import React, { useState, useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const ProtectedRoute = ({ children, ...rest }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // O cualquier otro indicador de carga que prefieras
  }

  return currentUser ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
