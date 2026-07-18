import React from 'react'
//import { BrowserRouter ,Routes , Route} from 'react-router'
import {createBrowserRouter} from 'react-router' 
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Feed from './features/post/pages/Feed'

/*  
 // Older Way of defining routes using BrowserRouter, Routes, and Route components

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<h2>Welcome to the App</h2>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

*/

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Feed />
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
])