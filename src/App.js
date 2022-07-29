import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Homes from "./pages/Homes";
import Rentals from './pages/Rentals';
import Listings from './pages/Listings';
import './App.css';


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/homes" element={<Homes />} />
      <Route path="/listings" element={<Listings />} />
    </Routes>
  )
};

export default App;
