import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
          <button
            onClick={() => navigate('/volunteer-signup')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Volunteer Signup
          </button>
          <button
            onClick={() => {/* Add donate logic */}}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Donate
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Contact
          </button>
        </div>
        <div className="text-center text-sm">
          © June 26, 2025. MyApp. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
