
import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='nav_bar'>
        <NavLink className='nav_items' to="/">Home</NavLink>
    
        <NavLink className='nav_items' to="/contact"  onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
        <NavLink className='nav_items' to="/education"  onClick={() => window.scrollTo(0, 0)}>Education</NavLink>
     <NavLink className='nav_items' to="/Skillls"  onClick={() => window.scrollTo(0, 0)}>Skills</NavLink>
     <NavLink className='nav_items' to="/Project"  onClick={() => window.scrollTo(0, 0)}>Project</NavLink>
      </div>
    </>
  );
};

export default Navbar;
