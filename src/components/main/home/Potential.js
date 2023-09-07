import React, { useEffect, useState } from 'react'
import style from './home.module.css'

export default function Potential() {
    const [dataimg, setDataimg] = useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/wTbBag/dataimg')
        .then((stream) => stream.json())
        .then((dataimg)=> setDataimg(dataimg))
    },[])
  return (
    <div className={style.Potential_container}>
        <div className={style.Potential_content}>
            <div className={style.Text_block}>
                <div className={style.Potential_title_block}>
                    <h2>Don’t miss out on my<br></br>‘Live life at the full<br></br>potential’ free guide</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    <br></br>
                    <br></br>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <button>Get your free guide now</button>
            </div>
            {
                dataimg.length && dataimg.map((itam)=>(
                    <div className={style.Potential_image_block} key={itam.id}>
                        <img src={itam.images} alt='images'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
