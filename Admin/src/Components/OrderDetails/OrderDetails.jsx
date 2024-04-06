import React, { useEffect, useState } from 'react'
import './OrderDetails.css'
import '../ListProduct/ListProduct.css';


const OrderDetails = () => {
    const [allOrders,setAllOrders] = useState([]);

  const fetchInfo =async() =>{
    await fetch('http://localhost:4000/orderdetails')
    .then((res)=>res.json())
    .then((data=>{setAllOrders(data)}));
  }

  useEffect(()=>{
    fetchInfo();
  },[])



  return (
    <div className='hh1'>
        <h1>All Orders</h1>
        <div className='listproduct-main'>
           <p>ORDER ID</p>
            <p>NAME</p>
            <p>ADDRESS</p>
            <p>DELIVERY TIME</p>
            <p>AMOUNT</p>
        </div>
        <div className='listproduct-main2'>
           {allOrders.map((order,index)=>{
          return <div key={index} className="listproduct-main2">
            <p>{order._id}</p>
              <p>{order.name}</p> 
              <p> {order.address} </p>
              <p> {order.deliveryTime} </p>
              <p> {order.amount} </p>
        </div>
           })}
    </div>
    </div>
  )
}

export default OrderDetails
