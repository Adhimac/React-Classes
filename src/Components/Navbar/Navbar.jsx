import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex justify-center bg-amber-500 text-white p-4 gap-[80px] font-black'>
          <li>
              <NavLink to="/">Home</NavLink>
          </li>
          <li>
              <NavLink to="/About">About</NavLink>
          </li><li>
              <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar