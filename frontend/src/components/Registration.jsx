import React from "react";
import {Link} from 'react-router-dom';
const Registration = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 flex flex-col justify-center p-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-3xl font-bold text-white text-center">Registration</h2>
          <p className="text-gray-400 text-center mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="block text-gray-300 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-1 w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-gray-400 text-sm">
                By registering you agree to receive updates and special offers.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center bg-gradient-to-tl from-blue-600 via-purple-600 to-gray-900">
        <img
          src="sidelogo.png"
          className="rounded-2xl shadow-2xl w-3/4 h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Registration;
