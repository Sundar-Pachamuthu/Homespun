import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../../src/assets/arrow.png'

const AddProduct = () => {
  const [image,setImage] = useState(false);

  const [productDetails,setProductDetails] = useState({
    name:"",
    image:"",
    category:"lunch",
    new_price:"",
    old_price:""
  })

  const imageHandler =(e)=>{
    setImage(e.target.files[0]);

  }

  const changeHandler =(e) => {
    setProductDetails({...productDetails,[e.target.name]:e.target.value })
  }


  const addProduct = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;


    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload',{
      method: 'POST',
      headers: {
        Accept:'application/json'
      },
      body:formData,
    }).then((resp)=> resp.json()).then((data)=>{responseData=data});

    if(responseData.success){
      product.image= responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify(product), 
      }).then((resp)=> resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  }



  return (
    <div className='addproduct'>
      <div className="addproduct-item">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>price</p>
          <input type='text' value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>offer price</p>
          <input type='text' value={productDetails.new_price} onChange={changeHandler} name='new_price' placeholder='type here' />
        </div>
      </div>
      <div className="addproduct-cat">
        <p>product category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" >
          <option value="break-fast">BREAK-FAST</option>
          <option value="lunch">LUNCH</option>
          <option value="dinner">DINNER</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={ image?URL.createObjectURL(image): upload_area} className='addproduct-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' />
        <button onClick={()=>{addProduct()}} className='product-btn'>ADD</button>
      </div>
    </div>
  )
}

export default AddProduct
