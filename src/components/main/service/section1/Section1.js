import React, { useEffect, useState } from 'react'
import style from '../service.module.css'
import Section2 from '../section2/Section2'
import Section3 from '../section3/Section3'
import Section4 from '../section4/Section4'

export default function Section1() {

  const [imgs, setImgs]= useState([])

  useEffect(()=>{
    fetch('https://retoolapi.dev/kZcXLf/dataservices')
    .then((stream)=> stream.json())
    .then((dataApi)=> setImgs(dataApi))
  })
  return (
    <div className={style.Service_container}>
        <div className={style.Service_content}>
            <div className={style.Service_areas_text_block}>
                <span>I can help you in these patricular areas.</span>
                <h2>I help people to<br></br>discover their<br></br>true potential</h2>
                <p>
                    I help people to discover their true potential and live a fulfilling life...
                    Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
                </p>
            </div>
            {
              imgs.length && imgs.map((itam)=>(
                <div className={style.Service_areas_girl_block} key={itam.id}>
                  <img src={itam.imgs} alt='girl'/>
                </div>
              ))
            }
        </div>
        <Section2/>
        <Section3/>
        <Section4/>
    </div>
  )
}
