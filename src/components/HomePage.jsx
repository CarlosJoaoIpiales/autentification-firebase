// src/components/HomePage.js
import React from 'react';
import { auth } from '../firebase/firebase-config';
import { signOut } from 'firebase/auth';

const HomePage = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Aquí podrías redirigir al usuario a la página de inicio de sesión o hacer otra acción tras el logout
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">Bienvenido a la página de inicio</h1>
      <p className="mt-4">Has iniciado sesión exitosamente. Aquí podrías mostrar contenido exclusivo para usuarios autenticados.</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default HomePage;
