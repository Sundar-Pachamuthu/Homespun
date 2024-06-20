import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductsDiplay from './Pages/ProductsDiplay';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer' ;
import banner1 from '../src/Components/Assets/Banner1.jpg';
import banner2 from '../src/Components/Assets/bba2.jpg';
import banner3 from '../src/Components/Assets/Banner3.jpg';
import Checkout from './Components/Checkout/Checkout';
import OrderPlaced from './Components/OrderPlaced/OrderPlaced';



function App() {
  return (   
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/breakfast' element={< ProductsDiplay banner={banner1} category="break-fast" />} /> 
        <Route path='/lunch' element={< ProductsDiplay banner={banner2} category="lunch" />} /> 
        <Route path='/dinner' element={< ProductsDiplay banner={banner3} category="dinner" />} /> 
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/orderplaced' element={<OrderPlaced/>} />
        <Route path='/login' element={<LoginSignup />} /> 
      </Routes>
      <Footer/>
      </BrowserRouter>  
    </div>
  );
}   

export default App;
