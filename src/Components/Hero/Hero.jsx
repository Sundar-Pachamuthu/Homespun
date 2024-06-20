import React from 'react'
import './Hero.css';
import logo from '../Assets/logo_big.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left' >
          <h1>get fresh <br /> <span>food</span> <br /> in easy way </h1>
          <p className='p' > Indulge your taste buds with our homemade culinary delights at Homespun!</p>
        </div>
        <div className="hero-right">
          <img src={logo} alt="" />
          <h1>homespun</h1>
        </div>
    </div>
  )
}

export default Hero
