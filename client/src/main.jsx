import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./index.css";
import "./style.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cars from "./pages/Cars.jsx";
import Cardetails from "./pages/Cardetails.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="flex items-center justify-between px-8 py-4">
        <NavLink to="/" className="text-xl font-bold text-black ">
          #CARLIFE
        </NavLink>
        <nav className="text-black font-bold flex gap-4">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cars">Cars</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<Cardetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
