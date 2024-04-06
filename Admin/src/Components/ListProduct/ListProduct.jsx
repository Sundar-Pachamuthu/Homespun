import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cart_cross_icon.png'

const ListProduct = () => {

  const [allproducts,setAllProducts] = useState([]);

  const fetchInfo =async() =>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data=>{setAllProducts(data)}));
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product= async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({id:id})
    })

    await fetchInfo();
  }



  return (
    <div className='hh1'>
      <h1>All Product List</h1>
      <div className="listproduct-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        {/* <hr /> */}
        {allproducts.map((product,index)=>{
          return <div key={index} className="listproduct-main2">
              <img src={product.image} alt="" className="listproduct-icon" />
              <p>{product.name}</p>
              <p> ₹{product.old_price} </p>
              <p> ₹{product.new_price} </p>
              <p> {product.category} </p>
              <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove' src={cross_icon} alt="" />
          </div>
         
        })}
      </div>
    </div>
  )
}

export default ListProduct
