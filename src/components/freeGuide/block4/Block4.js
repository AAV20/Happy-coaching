import React from 'react'
import style from '../freeGuide.module.css';
import StarIcon from '@mui/icons-material/Star';


export default function Block4() {
  return (
    <div className={style.Block4_container}>
        <div className={style.Block4_content}>
            <div className={style.Block4_title_block}>
                <h2>Don’t miss out on my <span>‘Live life<br></br>at the full potential’</span> free guide</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <button>Download my free guide</button>
                <small>More than 100+ 5 star reviews</small>
                <div>
                  <StarIcon className={style.StarIcons}/>
                  <StarIcon className={style.StarIcons}/>
                  <StarIcon className={style.StarIcons}/>
                  <StarIcon className={style.StarIcons}/>
                  <StarIcon className={style.StarIcons}/>
                </div>
            </div>
        </div>
    </div>
  )
}
