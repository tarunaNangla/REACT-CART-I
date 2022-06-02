import React from 'react'
// import {Routes,Route} from 'react-router-dom'
// import About from './About'
// import Cart from './Cart'
// import Home from './Home'
// import Login from './Login'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex'>
         
          <div><div><Link to="/">Home</Link></div></div>
          <div className='flexx'>
              <div><Link to="/about">About</Link></div>
              <div><Link to="/cart">Cart</Link></div>
              <div><Link to="/login">Login</Link></div>
              <div><Link to="/product">Product</Link></div>

          </div>

          {/* <Routes>
              <Route path={"/"} element={<Home/>}></Route>
              <Route path={"/about"} element={<About/>}></Route>
              <Route path={"/cart"} element={<Cart/>}></Route>
              <Route path={"/login"} element={<Login/>}></Route>
          </Routes> */}
    </div>
  )
}

export default Navbar
