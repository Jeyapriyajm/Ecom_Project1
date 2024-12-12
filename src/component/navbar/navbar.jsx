import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

  const [menu, setMenu]= useState("Home");
  
  return (
    <div className='navbar'>
    <img src={assets.logo} alt="" className='logo'/>
    <ul className="navbar-menu">
      <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}><a href="#Home">Home</a></li>
      <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}><a href="#Menu">Menu</a></li>
      <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}><a href="#Mobile App">Mobile App</a></li>
      <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}><a href="#Contect">Contect</a></li>
    </ul>
    <div className="navbar-right">
      <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
      </div>
      <button>Sign in</button>
    </div>
    </div>
  )
}

export default Navbar
