import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-blue-500 to-white text-white text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">😔 Oops! The page you’re looking for doesn’t exist.</p>
      <div className="mt-6">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/7794/7794839.png" 
          alt="404 Illustration" 
          className="w-64 mx-auto animate-bounce"
        />
      </div>
      <button 
        onClick={handleGoHome} 
        className="mt-8 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
        🏠 Back to Home
      </button>
    </div>
  );
};

export default NotFound;
