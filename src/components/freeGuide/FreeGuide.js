import React, { useEffect, useState } from 'react'
import style from './freeGuide.module.css'
import Block1 from './block1/Block1'
import Block2 from './block2/Block2'
import Block3 from './block3/Block3'
import Video from './video/Video'
import Block4 from './block4/Block4'



export default function FreeGuide() {

    const [freeGuideImg, setFreeGuideImg] = useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/LdC1j2/datafreeguide')
        .then((stream)=> stream.json())
        .then((dataFreeGuide)=> setFreeGuideImg(dataFreeGuide))
    })
  return (
    <div className={style.Freeguide_container}>
        <div className={style.Freeguide_content}>
            <div className={style.Freeguide_registration_block}>
                <div className={style.Freeguide_title_block}>
                    <h2>Results that speak<br></br>for themselves</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    </p>
                </div>
                <form>
                    <input type='text' placeholder='name'/>
                    <input type='email' placeholder='enter your email'/>
                    <span>We care about your data in our privacy policy</span>
                    <button>Get free guide</button>
                </form>
            </div>
            {
                freeGuideImg.length && freeGuideImg.map((itam)=>(
                    <div className={style.FreeGuide_girl_block} key={itam.id}>
                        <img src={itam.img} alt='girl'/>
                    </div>
                ))
            }
        </div>
        <Block1/>
        <Block2/>
        <Block3/>
        <Video/>
        <Block4/>
    </div>
  )
}
