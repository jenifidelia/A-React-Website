import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Services } from "./components/Pages/Services";
import { Products } from "./components/Pages/Products";
import { SignUp } from "./components/Pages/SignUp";
import { NotFound } from "./components/Pages/NotFound";

function App() {
    return (
        <>
        <Navbar />

        <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/Products" element={<Products/>} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="*" element={<NotFound/>} />
        </Routes>

        <Footer />

        </>
  );
}

export default App;
