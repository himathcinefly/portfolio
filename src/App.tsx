import React from "react";
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
