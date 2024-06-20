import React from 'react'
import './OrderPlaced.css'
import orderplaced from '../Assets/order placed.png';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {
  return (
    <div className='orderplaced'>
      <img src={orderplaced} alt="" srcset="" />
<h1>your order placed SUCCESSFULLY</h1>
      <button> <Link  style={{textDecoration:"none" , color:"white"}} to='/'> back to home </Link> </button>
    </div>
  )
}

export default OrderPlaced
