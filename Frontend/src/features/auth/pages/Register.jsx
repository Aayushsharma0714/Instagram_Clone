import React from 'react'
import {Link , useNavigate} from 'react-router'
import '../style/form.scss'
import { useState } from 'react'
import axios from 'axios'
import {useAuth} from "../hooks/useAuth";
 
const Register = () => {

const [username ,setUsername] = useState('')
const [email ,setEmail] = useState('')
const [password ,setPassword] = useState('')
const navigate = useNavigate();

const {handleRegister , loading} = useAuth();

async function handleSubmit(e){
  e.preventDefault()
  await handleRegister(username, email, password);
  navigate("/")

}

if(loading){
  return (<h1>Loading...</h1>)
}

  return (
       <main>
     <div className="form-container">
       <h2>Register</h2>
       <form onSubmit={handleSubmit}>
         <input onInput={(e)=>{setUsername(e.target.value)}}
         type="text"
         name='username' 
         placeholder="Enter your name" />
         
         <input onInput={(e)=>{setEmail(e.target.value)}}
         type='email'
          name='email' 
          placeholder="Enter your email" />
         
         <input onInput={(e)=>{setPassword(e.target.value)}}
         type="password" 
         name='password'
          placeholder="Password" />
         
         <button  className="button primary-button" type="submit">Register</button>
       </form>
       <p>Have a account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
     </div>
     </main>
  )
}

export default Register