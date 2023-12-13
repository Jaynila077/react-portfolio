import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import { Navbar } from "../pages/Navbar";

import { AnimatePresence } from "framer-motion";


export const AnimatedRoutes = () => {

    const location = useLocation();

    return(
        <AnimatePresence>
         <Navbar/>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
    )
}