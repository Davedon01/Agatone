import React from 'react'
import logo from "../assets/Agatone-logo-removebg-preview.png"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex justify-between bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 h-30 w-full shadow-black'>
        <div className=''>
            <img 
            src={logo} 
            alt=""
            className='h-auto w-40'
             />
        </div>

        <div>
            <ul className='flex gap-10 justify-end items-center mt-12'>
                <li><Link to="/">Home</Link></li>
               <li><Link to="/about us"> About us</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar