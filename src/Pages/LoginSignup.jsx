import React, { createContext, useState } from 'react'
import './CSS/Login.css'




// export setFormData = createContext(null);
const Signup = () => {    

    const [state,setState] = useState("Login");
      const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
      })

      const changeHandler= (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }


    const login = async ()=>{
      console.log("login function exicuted", formData);
      let responseData;
      await fetch('http://localhost:4000/login',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      }).then((response)=> response.json())
      .then((data)=>responseData=data)
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors )
      }

    }

    const signup = async ()=>{
      console.log("signup function exicuted", formData);
      let responseData;
      await fetch('http://localhost:4000/signup',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      }).then((response)=> response.json())
      .then((data)=>responseData=data)
      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors )
      }

    }

  return (
    <div>
            <div className="signup">
              <div className="container">
                  <form>
                      <h1>{state}</h1>
                      <div className="fields">
                        {state === "Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text"   placeholder='Your Name' />:<></>} 
                        <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder=' Email Address' />
                        <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
                      </div>
                      <button type='button' onClick={() => {state === "Login"? login() : signup() }} >Continue</button>
                      {state === "Sign Up"?<p className="loginsignup-login">
                        Already have an account? <span onClick={()=>{setState("Login")}} > Login here </span>
                      </p> :<p className="loginsignup-login">
                        Create an account? <span onClick={()=>{setState("Sign Up")}} > Click here </span>
                      </p>}
                      <div className="agree">
                        <input type="checkbox" name="" id="" />
                        <p>By continuing , i agree to the terms of use & privacy policy.</p>
                      </div>
                </form>
              </div>
      </div>

    </div>
  )
}

export default Signup
