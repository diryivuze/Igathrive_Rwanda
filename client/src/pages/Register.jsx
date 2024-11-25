import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover w-full h-full overflow-hidden"
        style={{ backgroundImage: `url('/images/login.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-4 left-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-blue-800 hover:text-blue-600"
          >
            <FaHome className="text-2xl" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </div>
      </div>

      <div className="relative max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl mt-8 shadow-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="Full Name"
                required
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                ) : (
                  <FaEye className="text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>

            <div className="relative">
              <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                ) : (
                  <FaEye className="text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-all duration-300"
            >
              Register
            </motion.button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              Login here
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
