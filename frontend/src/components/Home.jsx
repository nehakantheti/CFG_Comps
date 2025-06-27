import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link
  to="/volunteer-signup"
  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-2.5 px-6 rounded-xl text-sm md:text-base mt-4"
>Volunteer-Signup Page</Link>
    </div>
  )
}

export default Home
