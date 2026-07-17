import React from 'react'
import { NavLink } from 'react-router'


const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center gap-5 bg-black text-white p-4">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
