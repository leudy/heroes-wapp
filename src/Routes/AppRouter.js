import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//my stuft
import { DCScreen } from "../components/DCScreen";
import { MarvelScreen } from "../components/MarvelScreen";
import { SearchScreen } from "../components/SearchScreen";
import { Navbar } from "../Shared/Navbar";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <h1>Welcome to router</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="/dc" element={<DCScreen />} />
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
