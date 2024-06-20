// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
const userSlice =createSlice({
    name:"user",
    initialState:{
        loading:false,
        isAuthenticateUser:false
    },
    reducers:{
        loginRequest(state,action){
            return{
                loading:true,
                isAuthenticateUser:false
            }
        },
        loginSuccess(state,action){
            return{
                loading:false,
                isAuthenticateUser:true,
                user:action.payload.user 
            }
        },
        loginFail(state,action){
            return{
                loading:false,
                isAuthenticateUser:false,
                error:action.payload
            }
        }
    }
})
const {actions,reducer}=userSlice;
export const {loginRequest,loginSuccess,loginFail}=actions;
export default reducer;
