import React from 'react'
import './Newsletter.css'
function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>stay update</p>
        <div>
            <input type="email" placeholder='your email id' />
            <button>subscribe</button>
        </div>      
    </div>
  )
}

export default Newsletter
