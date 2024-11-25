<<<<<<< HEAD
import { useState } from "react";

import toast from "react-hot-toast";

import {
  FaUser,
  FaLock,
  FaHome,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    username: "",

    email: "",

    password: "",

    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (
      formData.username == "" &&
      formData.password == "" &&
      formData.email == ""
    ) {
      setError("Please enter your username and password");
      return;
    }
    try {
      const req = await axios.post(
        `${import.meta.env.VITE_MAIN_URL}/auth/register`,
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );
      if (req.status === 200) {
        window.location.href = "/login";
      }
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to process Register ");
      setLoading(false);
    }
=======
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaHome, FaEye, FaEyeSlash, FaPhoneAlt, FaCalendarDay } from 'react-icons/fa';
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
    phoneNumber: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return; // Prevent form submission
    }
    console.log('Form submitted:', formData);
>>>>>>> 2a882fcbab34c725449d38e3a8b024375bce2629
  };

  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
<<<<<<< HEAD
=======
      {/* Background Image with Overlay */}
>>>>>>> 2a882fcbab34c725449d38e3a8b024375bce2629
      <div
        className="absolute inset-0 bg-cover w-full h-full overflow-hidden"
        style={{ backgroundImage: `url('/images/login.jpg')` }}
      >
<<<<<<< HEAD
        <div className="relative inset-0 bg-black/80"></div>

        <div className="relative top-4 left-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-blue-800 hover:text-blue-600"
          >
            <FaHome className="text-2xl" />

            <span className="hidden sm:inline">Home</span>
          </button>
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="bg-white rounded-2xl mt-8 shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Create an Account
            </h2>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                {error}
              </div>
            )}

            <div className="space-y-6">
              <div className="relative">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  autoComplete="username"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  autoComplete="new-password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="relative">
                <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                onClick={() => handleSubmit()}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Register"
                )}
              </button>
            </div>

            <p className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
=======
        <div className="absolute inset-0 bg-black/40">
        
        {/* Main Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-screen-lg mx-auto"
        >
                  
        {/* Home Button */}
        <div className="absolute top-4 left-4">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-blue-800 hover:text-blue-600"
          >
            <FaHome className="text-2xl" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </div>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex  mt-20 flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-2/4 p-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-blue-950 mb-2">Create Account</h2>
                <p className="text-gray-600">Join IgaThrive and start your learning journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
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

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
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

                {/* Password Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
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

                {/* Confirm Password Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
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

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  Create Account
                </motion.button>
              </form>

              <p className="text-center mt-6 text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                >
                  Login here
                </button>
              </p>
            </div>

            {/* Welcome Section */}
            <div className="hidden md:block w-3/5 bg-gradient-to-br from-blue-950 to-blue-500 text-white p-12">
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Welcome to IgaThrive!</h2>
                <p className="text-lg mb-8">
                  Unlock your potential with our comprehensive courses and expert guidance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Access to premium courses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Professional certification</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Expert instructors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span>Lifetime access</span>
                  </li>
                </ul>
              </div>
              {/* Decorative circles */}
              <div className="absolute -bottom-32 -right-32 w-64 h-64 border-4 rounded-full border-opacity-30 border-t-8"></div>
              <div className="absolute -bottom-40 -right-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Register;
>>>>>>> 2a882fcbab34c725449d38e3a8b024375bce2629
