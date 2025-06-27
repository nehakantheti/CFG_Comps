import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      // Add logout logic here
      navigate('/login');
    }
  };

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400">MyApp</div>
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <div className="relative">
            <div 
              className="cursor-pointer text-2xl hover:text-blue-400 transition-colors duration-300"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              👤
            </div>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800">
                <button
                  onClick={() => navigate('/profile')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
