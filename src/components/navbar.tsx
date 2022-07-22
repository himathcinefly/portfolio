import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/About">About</Link>
    </li>
    <li>
      <Link to="/Projects">Projects</Link>
    </li>
    <li>
      <Link to="/Contact">Contact</Link>
    </li>
  </div>
  );
}
export default navbar;