import axios from 'axios'
import { registerSuccess,registerFail,registerRequest } from '../slice/regSlice'

export const register= (name,email,password)=> async (dispatch)=>{
    try{   
        dispatch( registerRequest())
        const {data} = await axios.post('/api/v1/register',{name,email,password});
        dispatch(registerSuccess(data))
    }
    catch(error){
       dispatch(registerFail(error.response.data.message))
    }
}