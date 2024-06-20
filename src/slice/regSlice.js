// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const regSlice =createSlice({
    name:"user",
    initialState:{
        loading:false,
        isAuthenticateUser:false,
        error:false
    },
    reducers:{
        registerRequest(state,action){
            return{
                loading:true,
                isAuthenticateUser:false
            }
        },
        registerSuccess(state,action){
            return{
                loading:false,
                isAuthenticateUser:true,
                user:action.payload.user 
            }
        },
        registerFail(state,action){
            return{
                loading:false,
                isAuthenticateUser:false,
                error:action.payload
            }
        }

    }
})
const {actions,reducer}=regSlice;

export const {registerRequest,registerSuccess,registerFail}=actions;
export default reducer;