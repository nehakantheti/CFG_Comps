import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400">MyApp</div>
        <div className="flex space-x-8">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
