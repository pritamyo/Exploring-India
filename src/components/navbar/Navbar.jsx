// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo_Exploring_india.svg"

function Navbar(){
  return (
    <div>
      <nav>
        <img  className='logo-svg' src={logo} ></img>

        <ul className='navbar-tabs'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar
