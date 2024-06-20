import axios from 'axios'
import { loginSuccess,loginFail,loginRequest } from '../slice/userSlice'

export const login= (email,password)=> async (dispatch)=>{
    try{   
        dispatch( loginRequest())
        const {data} = await axios.post('/api/v1/login',{email,password});
        dispatch(loginSuccess(data))
    }
    catch(error){
       dispatch(loginFail(error.response.data.error))
    }
}