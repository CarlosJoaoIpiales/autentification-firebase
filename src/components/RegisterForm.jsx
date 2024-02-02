// src/components/RegisterForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección después del registro
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Para la redirección después del registro exitoso

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores previos
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirigir al usuario a la página de inicio después del registro exitoso
    } catch (error) {
      setError('Error al crear la cuenta. Por favor, intenta de nuevo.');
      console.error("Error al registrar el usuario:", error.message);
    }
  };

  // Función para manejar el regreso al inicio de sesión
  const handleBack = () => {
    navigate('/login'); // Asegúrate de que esta ruta corresponda a tu componente de inicio de sesión
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Campos del formulario */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo Electrónico"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
          <p className=''>La contraseña tiene que tener minimo 6 caracteres</p>
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Registrarse
          </button>
          <button
            onClick={handleBack}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
