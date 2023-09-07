import React from 'react'
import style from '../freeGuide.module.css'

export default function Video() {
  return (
    <div className={style.Video_block_container}>
        <div className={style.Video_block_content}>
            <iframe width="640" height="360" src="https://www.youtube.com/embed/UTGLT8NLXBQ" title="A playlist for reading book in the room." frameborder="0"></iframe>
        </div>
    </div>
  )
}
