import React from "react";
import { Route, Routes } from "react-router-dom";

//my stuft
import { DCScreen } from "../Pages/DCScreen";
import { MarvelScreen } from "../Pages/MarvelScreen";
import { SearchScreen } from "../components/SearchScreen";
import { Heroe } from "../Pages/Heroes/Heroe";
import { Navbar } from "../Shared/Navbar";
export const DashboardRoute = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-6">
        <Routes>
          <Route path="dc" element={<DCScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="heroe/:id" element={<Heroe />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
