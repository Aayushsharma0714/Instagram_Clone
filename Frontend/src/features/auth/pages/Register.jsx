import React from 'react'
import {Link} from 'react-router'
import '../style/form.scss'
import { useState } from 'react'
import axios from 'axios'


const Register = () => {

const [username ,setUsername] = useState('')
const [email ,setEmail] = useState('')
const [password ,setPassword] = useState('')

async function handleSubmit(e){
  e.preventDefault()

  axios.post('http://localhost:3000/api/auth/register',{
    username,
    email,  
    password
  } ,{
    withCredentials:true 
  }
)
  .then((res)=>{
    console.log(res.data)
  })
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
         
         <button type="submit">Register</button>
       </form>
       <p>Have a account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
     </div>
     </main>
  )
}

export default Register