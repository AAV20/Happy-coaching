import React, {useEffect, useState } from 'react'
import style from './home.module.css'


export default function Strategies() {

  const [girlImage, setGirlimage]= useState([])

  useEffect(()=>{
    fetch('https://retoolapi.dev/qLjX7y/girlimage')
    .then((stream)=> stream.json())
    .then((data)=> setGirlimage(data))
  },[])

  return (
    <div className={style.Strategies_section}>
            <svg className={style.Wave} width="101" height="17" viewBox="0 0 101 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.2609 4.32287L38.3456 17L50.5232 4.32287L62.6544 17L74.7391 4.32287L86.8702 17L101 2.23427L98.8155 0L86.8702 12.4828L74.925 0L74.7391 0.194298L74.5996 0L62.6544 12.4828L50.6627 0L50.5232 0.194298L50.3373 0L38.3456 12.4828L26.4004 0L26.2609 0.194298L26.075 0L14.1298 12.4828L2.18454 0L0 2.23427L14.1298 17L26.2609 4.32287Z" fill="#20AD96"/>
            </svg>
            <div className={style.Parent_flex_block}>
              <div className={style.Strategies_blockOne}>
                <span>Proven strategies backed by science for success.</span>
                <h2>Live life at the<br></br>full potential</h2>
                <p>
                  I help people to discover their true potential and live a fulfilling life...
                  Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
                </p>
                <button>Get your free guide now</button>
              </div>
              {
              girlImage.length && girlImage.map((itam)=>(
                <div className={style.Strategies_blockTwo} key={itam.id}>
                  <img className={style.Strategies_girl_img} src={itam.img} alt='girl'/>
                </div>
              ))
              }
            </div>
        </div>
  )
}
