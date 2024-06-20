// import React, { useState } from 'react'
// import './CSS/Login.css'
// import { Link, useNavigate } from 'react-router-dom'
// // import { useState, useEffect } from 'react'
// // import {register} from '../actions/regAction'
// // import {useDispatch, useSelector} from 'react-redux'
// // import {ToastContainer, toast} from 'react-toastify'

// const Signup = () => {    
//   //   const [email,setEmail]=useState("")
//   //   const [password,setPassword]=useState('')
//   //   const [name,setName]=useState('')
//   //   const dispatch=useDispatch()
//   //   const navigate=useNavigate()
//   // const {loading,error,isAuthenticateUser} =useSelector(state=>state.regState)
  
//   //   const submitHandler=(e)=>{
//   //     e.preventDefault();
//   //     dispatch(register(name,email,password))
//   //   }
//   //   useEffect(()=>{  
//   //     if(isAuthenticateUser){
//   //         navigate('/')          
//   //     }
//   //      if(error){
//   //          toast.error(error)
//   //          return
//   //         }
//   //   },[dispatch,error,isAuthenticateUser,navigate])

//     const [state,setState] = useState("Login");


//     const login =async()=>{
//       console.log("login function exicute");
//     }

//     const signup =async()=>{
//       console.log("signup function exicute");

//     }

//   return (
//     <div>
//             <div className="signup">
//         <div className="container">
//             <form onSubmit={null} >
//           <h1>{state}</h1>
//           <div className="fields">
//              {state === "Sign Up"?<input type="text"   placeholder='Your Name' />:<></>} 
//             <input type="email"  placeholder=' Email Address' />
//             <input type="password"  placeholder='Password' />
//           </div>
//           <button onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
//           {state === "Sign Up"?<p className="loginsignup-login">
//             Already have an account? <span onClick={()=>{setState("Login")}} > Login here </span>
//           </p> :<p className="loginsignup-login">
//             Create an account? <span onClick={()=>{setState("Sign Up")}} > Click here </span>
//           </p>}
          
          
          
//           <div className="agree">
//             <input type="checkbox" name="" id="" />
//             <p>By continuing , i agree to the terms of use & privacy policy.</p>
//           </div>
//           </form>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Signup
