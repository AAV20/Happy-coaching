import React, { useEffect, useState } from 'react'
import style from './about.module.css'
import Companies from './companies/Companies'
import AboutMe from './aboutMe/AboutMe'


export default function About() {

    const [aboutimg, setAboutImg] = useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/YeXJIU/aboutimg')
        .then((stream)=> stream.json())
        .then((aboutdata)=> setAboutImg(aboutdata))
    })
  return (
    <div className={style.About_container}>
        <div className={style.About_flex_parent_block}>
            <div className={style.About_content}>
                <div className={style.About_text_content}>
                    <small>Proven strategies backed by science for success.</small>
                    <h2>About me</h2>
                    <p>
                        I help people to discover their true potential and live a fulfilling life...
                        Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
                    </p>
                    <button>Get your free guide now</button>
                </div>
                {
                    aboutimg.length && aboutimg.map((itam)=>(
                        <div className={style.About_images_block} key={itam.id}>
                            <img src={itam.img} alt='img'/>
                        </div>
                    ))
                }
            </div>
        </div>
        <Companies/>
        <AboutMe/>
    </div>
  )
}
