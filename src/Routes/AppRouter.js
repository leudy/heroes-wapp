import React from "react";
import { DashboardRoute } from "./DashboardRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DashboardRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
