import React, { useEffect, useState } from 'react'
import style from './home.module.css'

export default function Session() {

    const [girlimg, setGirlimg]= useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/TX1XeL/dataisessionmg')
        .then((stream)=> stream.json())
        .then((sessiondata)=> setGirlimg(sessiondata))
    })
  return (
    <div className={style.Session_container}>
        <div className={style.Session_content}>
            <div className={style.Session_text_block}>
                <h2>Get 15-Minutes<br></br>Complimentary online session.</h2>
                <p>Limited Period Offer. Claim Now.</p>
                <button>Book now</button>
            </div>
            <div className={style.Session_image_parent}>
            {
    
                girlimg.length && girlimg.map((itam)=>(
                    <div className={style.Session_image_block} key={itam.id}>
                        <img src={itam.images} alt='images'/>
                    </div>
                ))
    
            }
            </div>
        </div>
    </div>
  )
}
