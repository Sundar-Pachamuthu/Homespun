import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo_big from '../Assets/logo_big.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
    const [menu,setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-left'>
        <img src={logo_big} alt=''/> 
        <p>HomeSpun</p>
      </div>
      <ul>
        <li onClick={()=>{setMenu('home')}} > <Link className='link' style={{textDecoration: 'none' }} to='/'>Home</Link>{menu=== 'home'?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu('break-fast')}}><Link className='link' style={{textDecoration: 'none' }} to='/breakfast'>Break-Fast</Link> {menu=== 'break-fast'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('lunch')}} > <Link className='link'  style={{textDecoration: 'none' }} to='/lunch'>Lunch</Link> {menu=== 'lunch'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('dinner')}} > <Link className='link' style={{textDecoration: 'none' }} to='/dinner'>Dinner</Link> {menu=== 'dinner'?<hr/>:<></>}</li>
      </ul>
      <div  className='nav-right'>
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location .replace('/')}}>Logout</button>:<Link style={{textDecoration: 'none' }} to='/login'><button >Login</button></Link>
      }
        {/* <Link style={{textDecoration: 'none' }} to='/login'><button>Login</button></Link> */}
        <Link style={{textDecoration: 'none' }} to='/cart'><img onClick={window.scrollTo(0,0)} src={cart_icon} alt=''/></Link>
        <div  className='cart-count'> {getTotalCartItems()} </div>
      </div>
    </div>
  )
}
 
export default Navbar
