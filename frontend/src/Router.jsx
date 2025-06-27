import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import VolunteerSignup from "./components/VolunteerSignup";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration/>} />
      <Route path="/login" element={<Login />} />
     
      <Route path="/volunteer-signup" element={<VolunteerSignup />} />

      
    </Routes>
  );
};

export default AppRoutes;
