import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration/>} />
    </Routes>
  );
};

export default AppRoutes;
