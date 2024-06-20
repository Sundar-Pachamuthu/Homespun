import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import NewDishes from '../Components/NewDishes/NewDishes'
import Newsletter from '../Components/Newsletter/Newsletter'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewDishes/>
        <Newsletter/>
    </div>
  )
}

export default Home
