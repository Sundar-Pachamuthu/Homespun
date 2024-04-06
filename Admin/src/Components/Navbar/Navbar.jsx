import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo_big.png'

const Navbar = () => {
  return (
    <div className='Navbar'>
       <img src={navlogo}   className='Nav-logo' alt="" />
        <p>homespun</p>
       <h1>Admin pannel</h1>
    </div>
  )
}

export default Navbar;
