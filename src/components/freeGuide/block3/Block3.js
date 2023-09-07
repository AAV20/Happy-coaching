import React from 'react'
import style from '../freeGuide.module.css'
import skype from './iconsImage/Frame.png'
import messages from './iconsImage/Featured icon.png'


export default function Block3() {
  return (
    <div className={style.Block3_container}>
        <div className={style.Block3_content}>
            <div className={style.Block3_text_block_1}>
                <small>How does it work?</small>
                <h2>Are you ready to<br></br>transform your life?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                </p>
            </div>
            <div className={style.Block3_text_block_2}>
                <div className={style.Block3_text_flex_1}>
                    <img src={skype} alt='icons'/>
                    <div>
                        <h5>Online consultation</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
                <div className={style.Block3_text_flex_2}>
                    <img src={messages} alt='icons'/>
                    <div>
                        <h5>Ready to start? Let’s talk!</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
