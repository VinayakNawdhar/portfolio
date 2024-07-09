import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-between p-8'>
      <h1 className='text-xl font-[700]'>VINAYAK NAWDHAR ©</h1>
      <ul className='font-[700] flex flex-col gap-2 text-sm tracking-widest text-right'>
        <li>
          <NavLink to='/' ><span></span>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/project'><span></span>PROJECTS</NavLink>
        </li>
        <li>
          <NavLink to='/about'><span></span>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to='/contact'><span></span>CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar