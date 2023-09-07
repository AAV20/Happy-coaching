import React, { useEffect, useState } from 'react'
import style from '../service.module.css'
import icons1 from '../serviceImg/Featured icon (1).png'
import icons2 from '../serviceImg/Featured icon (2).png'
import icons3 from '../serviceImg/Featured icon (3).png'
import icons4 from '../serviceImg/Featured icon.png'


export default function Section3() {
    const [image, setImage] = useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/9PAmFL/datagirlimg')
        .then((stream)=> stream.json())
        .then((dataimg)=> setImage(dataimg))
    },[])
  return (
    <div className={style.Section3_container}>
        <div className={style.Section3_text_block}>
            <span>How does it work?</span>
            <h2>Are you ready<br></br>to transform your life?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
            </p>
        </div>
        <div className={style.Section3_content}>
            <div className={style.Section_child_content}>
                <div className={style.Section3_flex_block}>
                    <img src={icons1} alt='icon'/>
                    <div className={style.Section3_mini_text_block}>
                        <h4>Talk to me first</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`</p>
                    </div>
                </div>
                <div className={style.Section3_flex_block}>
                    <img src={icons2} alt='icon'/>
                    <div className={style.Section3_mini_text_block}>
                        <h4>Schedule a meeting</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`</p>
                    </div>
                </div>
                <div className={style.Section3_flex_block}>
                    <img src={icons3} alt='icon'/>
                    <div className={style.Section3_mini_text_block}>
                        <h4>Online consultation</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`</p>
                    </div>
                </div>
                <div className={style.Section3_flex_block}>
                    <img src={icons4} alt='icon'/>
                    <div className={style.Section3_mini_text_block}>
                        <h4>Ready to start? Let’s talk!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`</p>
                    </div>
                </div>
            </div>
                {
                    image.length && image.map((itam)=>(
                        <div className={style.Image_flex_block} key={itam.id}>
                            <img src={itam.img} alt='img'/>
                        </div>
                    ))
                }
        </div>
    </div>
  )
}
