import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import VolunteerSignup from "./components/VolunteerSignup";
import Profile from "./components/Profile";
import Contact from "./components/Contact";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/volunteer-signup" element={<VolunteerSignup />} />
      <Route path="/contact" element={<Contact />} />

      
    </Routes>
  );
};

export default AppRoutes;
