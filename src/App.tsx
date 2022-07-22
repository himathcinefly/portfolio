import React from "react";
import "./App.css";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Projects from "./pages/Projects/projects";

import Navbar from "./components/Navbar/navbar";

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
