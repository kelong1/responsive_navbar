import React, { useState } from 'react'
import {FaBars} from "react-icons/fa"

export const Header = () => {
   const[isActive,setActive]=useState("false")
   const toggle=()=>{
    setActive(!isActive)
   }
  return (
    <div className='header'>
        <div className='logo'>
            <div>navbar</div>
            <div className='bars' onClick={toggle}><FaBars/></div>
        </div>
        <div className={isActive?"nav links":"nav"}>
            <ul>
                <li><a href="#home">Home</a> </li>
                <li><a href="#About">About</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#About">login</a></li>
            </ul>
        </div>
    </div>
  )
}
