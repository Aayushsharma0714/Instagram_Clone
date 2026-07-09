import React ,  {useState} from 'react'
import {Link} from 'react-router'
import axios from 'axios'
import '../style/form.scss'
const Login = () =>{ 

  const [username ,setUsername] = useState('')
  const [password ,setPassword] = useState('')

  async function handleSubmit(e){
    e.preventDefault()

    axios.post("http://localhost:3000/api/auth/login" , {
      username, 
      password
    } , {
      withCredentials:true
    })
  }

  return (
     <main>
     <div className="form-container">
       <h2>Login</h2>
       <form onSubmit={handleSubmit}>
         <input onInput={(e)=>setUsername(e.target.value)}  
         type="text"  
         name='username' 
         placeholder="Enter your name" />
         <input onInput={(e)=>setPassword(e.target.value)}  
         type="password"
          name='password'
          placeholder="Password" />
         <button type="submit">Login</button>
       </form>
              <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
     </div>
     </main>
  )
}

export default Login