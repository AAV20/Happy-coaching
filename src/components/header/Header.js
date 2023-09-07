import React, { useEffect, useState } from 'react'
import style from './header.module.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [logo, setLogo]=useState([])
  



  useEffect(()=>{
    fetch('https://retoolapi.dev/c0nR9G/datalogo')
    .then((stream)=> stream.json())
    .then((data)=> setLogo(data))
  },[])

 
  return (
    <div className={style.Header_Container}>
        <div className={style.Header_Content}>
          {
          logo.length && logo.map((itam)=>(
            <div className={style.Navbar} key={itam.id}>
            <div className={style.Child_navbar}>
            <img src={itam.img} alt='logo'/>
            <div className={style.Navbar_link}>
              <nav>
                <ul>
                <NavLink className={style.link} to='/'>
                  Home
                </NavLink>
                <NavLink className={style.link} to='/service'>
                  Services
                </NavLink>
                <NavLink className={style.link} to='/about'>
                  About us
                </NavLink>
                <NavLink className={style.link} to='/extra'>
                  Extra Salespage
                </NavLink>
                </ul>
              </nav>
              <NavLink className={style.Navbar_btn} to='/freeGuide'>
                <div className={style.Child_link}>
                  Get your free guide now
                </div>
              </NavLink>
            </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
