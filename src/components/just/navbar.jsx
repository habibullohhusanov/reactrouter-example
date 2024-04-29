import React from 'react';
import "./nav.css"
import { NavLink, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default Navbar