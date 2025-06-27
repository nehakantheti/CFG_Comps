import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ENDPOINTS } from '../config';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(ENDPOINTS.LOGIN, {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.data.token);
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Login</h2>
          <p className="text-gray-400 text-center mt-2 text-sm md:text-base">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>

          {error && (
            <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          <form className="mt-6 md:mt-8 space-y-4 md:space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-300 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 w-full p-2.5 md:p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:outline-none text-sm md:text-base"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="mt-1 w-full p-2.5 md:p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:outline-none text-sm md:text-base"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="text-gray-400 text-sm">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-2.5 md:py-3 rounded-xl text-sm md:text-base ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-gradient-to-tl from-blue-600 via-purple-600 to-gray-900 order-first md:order-last">
        <img
          src="sidelogo.png"
          alt="Side Logo"
          className="rounded-2xl shadow-2xl w-1/2 md:w-3/4 h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
