import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar"

function App() {
  return (
    <main>
      <Router>
        <Navbar />
      </Router>
      <About />
      {/* <Projects />
      <Contact /> */}
    </main>
  );
}

export default App;
