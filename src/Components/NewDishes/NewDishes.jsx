import React, { useEffect, useState } from 'react'
import './NewDishes.css';
// import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';
const NewDishes = () => {
  const [new_collection,setNewCollection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNewCollection(data));
  },[])  

  return (
    <div  className='newdishes' >
        <h1>new arraives</h1>
        <hr />
        <div className="arrives">
            {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
      
    </div>
  )
}

export default NewDishes
