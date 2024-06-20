import React, { useState } from 'react'
import '../Checkout/Checkout.css'
import { useContext } from 'react';
import '../CartItems/CartItems'
import { Link } from 'react-router-dom';
// import remove_icon from '../Assets/cart_cross_icon.png'
import {ShopContext} from '../../Context/ShopContext';

const Checkout = () => {
  // const [totalProductTitles,settotalProductTitles] = useState([]);
    const {getTotalCartAmount,all_product , cartItems } = useContext(ShopContext);
    const [orderDetails,setOrderDetails] = useState({
      name:"",
      address:"",
      amount: "",
      mobileNumber: null,
      specification: "",
      deliveryTime:"7:30 AM",
    })

    const changeHandler =(e) => {
      orderDetails.amount= getTotalCartAmount();
      setOrderDetails({...orderDetails,[e.target.name]:e.target.value });
      console.log(orderDetails);
    }

    const orderdetails  = async(e)=>{
      e.preventDefault();
      console.log(orderDetails);
      // let responseData;
      let order_details= orderDetails;
      console.log(order_details);
      await fetch('http://localhost:4000/orderdetails',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(order_details),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert(" YOUR ORDER PLACED SUCCESSFULLY"):alert("failed")
      })
    }




  return (
    <div>
      {/* {all_product.map((e)=>{
         const productTitle= [e.name];
        //  settotalProductTitles(productTitle)
         const productQuantity = cartItems[e.id];
                if(cartItems[e.id]>0)
                {
                    return (
                            <div className="cartitems-format   cartitems-main">
                            <p>{productTitle}</p>
                            <input type="text" value={productQuantity} />
                </div>)
                }
                return null;
            })} */}

      <form className='formm' >
        <h1 className="title">process to checkout</h1>
       <p> name:  <input value={orderDetails.name}  name='name' onChange={changeHandler}  placeholder='enter ur name' type="text"  required/> </p>
        <p> Address: <input name='address'  value={orderDetails.address} onChange={changeHandler} placeholder='enter your address here'  type="text" required/></p>
        <p> MOBILE NUMBER: <input name='mobileNumber'  value={orderDetails.mobileNumber} onChange={changeHandler} placeholder='enter your number here'  type="number" required/></p>
        <p> SPECIFICATION: <input name='specification'  value={orderDetails.specification} onChange={changeHandler} placeholder='Optional'  type="text" required/></p>
        <div className="sel">
        <p>Delivery time:</p>
        <select name='deliveryTime'  value={orderDetails.deliveryTime} onChange={changeHandler}  required>
          <option value="7:30 AM">7:30 AM </option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="7:30 PM">7:30 PM</option>
        </select>
        </div>
        <div className="sel">
        <p> Payment Mode:</p>
        <select required >
          <option>  Cash on delivery</option>
        </select>
        </div>
        <h1> total amount: <input  name='amount ' type="text" value={getTotalCartAmount()} required /> </h1>
        <button  onClick={(e)=>{orderdetails(e)}}> <Link  style={{textDecoration: "none", color:"white", textShadow: "0px 0px 10px black"}}  to='/orderplaced'> submit</Link>  </button>
        </form>
    </div>
  )
}

export default Checkout
