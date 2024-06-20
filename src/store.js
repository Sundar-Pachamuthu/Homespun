import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import productsReducer from './slice/productsSlice'
import productReducer from './slice/productSlice'
import userReducer from './slice/userSlice'
import regReducer from './slice/regSlice'
import cartReducer from './slice/cartSlice'
import orderReducer from './slice/orderSlice'


const reducer=combineReducers({
   productsState:productsReducer,
   productState:productReducer,
   userState:userReducer,
   regState:regReducer,
   cartState:cartReducer,
   orderState:orderReducer,
})

const store=configureStore({
    reducer
});

export default store;