import React, { useEffect, useState } from 'react'
import style from './home.module.css'

export default function Motivated() {

    const [blog, setBlog]= useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/X5xTjN/datablogs')
        .then((stream)=> stream.json())
        .then((data)=> setBlog(data))
    },[])
  return (
    <div className={style.Motivated_container}>
        <div className={style.Motivated_content}>
            <div className={style.Motivated_title}>
                <h2>Stay Motivated, read the<br></br>weekly blog articles.</h2>
            </div>
            <div className={style.Blog_blocks_parent}>
                {
                    blog.length && blog.map((itam)=>(
                        <div className={style.Blogs} key={itam.id}>
                            <img className={style.blogs_img} src={itam.img} alt='blogimg'/>
                            <div className={style.Blogs_description}>
                                <h2>{itam.title}</h2>
                                <p>{itam.text}</p>
                            </div>
                        </div>
                    ))
                }
                
            </div>
            <div className={style.Blogs_btn_block}>
                <button className={style.Blogs_btn}>Read more blogs</button>
            </div>
        </div>
    </div>
  )
}
