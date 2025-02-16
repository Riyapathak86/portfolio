
import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className='nav_bar'>
        <NavLink className='nav_items' to="/">Home</NavLink>
    
        <NavLink className='nav_items' to="/contact">Contact</NavLink>
        <NavLink className='nav_items' to="/experience">Experience</NavLink>
     <NavLink className='nav_items' to="/Skillls">Skills</NavLink>
     <NavLink className='nav_items' to="/Project">Project</NavLink>
      </div>
    </>
  );
};

export default Navbar;
