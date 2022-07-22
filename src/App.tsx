import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";

import Navbar from "./components/navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}

        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
