// File: src/App.jsx
import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Home from "/src/pages/Home";
import ProductsService from "/src/pages/ProductsService";
import ProductDetail from "/src/pages/ProductDetail";
import About from "/src/pages/About";
import Servicelist from "/src/pages/Servicelist";
import Authform from "/src/pages/Authform";
import Navbar from "/src/pages/Navbar";

export default function App() {
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsService" element={<ProductsService />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/services" element={<Servicelist />} />
        <Route path="/auth" element={<Authform />} />
        <Route path="/about" element={<About />} />
      </Routes>
  
      </>
  );
}
