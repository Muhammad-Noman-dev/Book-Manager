import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    
   <div className='w-full flex justify-between h-15 items-center bg-gray-200 shadow px-5'>
     <div className='w-[10%] h-full flex items-center'>
      <h1 className='font-bold text-zinc-800'>LOGO</h1>
     </div>
     <div className='w-[50%] h-full'>
      <ul className='w-full h-full flex gap-6 list-none items-center text-zinc-800 font-medium'>
        <li className="cursor-pointer"><NavLink to="/">HOME</NavLink></li>
        <li className="cursor-pointer"><NavLink to="/about">ABOUT</NavLink></li>
        <li className="cursor-pointer"><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
     </div>
    
    </div>
    
  )
}

export default Navbar
 