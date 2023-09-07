import React from 'react'
import style from '../freeGuide.module.css'
import avatar from './avatar/Avatar.png'
import StarIcon from '@mui/icons-material/Star';

export default function Block2() {
  return (
    <div className={style.Block2_container}>
        <div className={style.Block2_content}>
            <div className={style.Block2_flex_parent}>
            <div className={style.Block2_flex_1}>
                <div className={style.Block2_flex_1_child}>
                    <div className={style.Child_content}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <img src={avatar} alt='avatar'/>
                        <h5>Alise</h5>
                        <div className={style.Block2_stars_icons}>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                        </div>
                    </div>
                </div>
                <div className={style.Block2_flex_1_child}>
                    <div className={style.Child_content}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <img src={avatar} alt='avatar'/>
                        <h5>Alise</h5>
                        <div className={style.Block2_stars_icons}>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                        </div>
                    </div>
                </div>
            </div>

            {/* block-two */}

             <div className={style.Block2_flex_2}>
                <div className={style.Block2_flex_1_child}>
                    <div className={style.Child_content}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <img src={avatar} alt='avatar'/>
                        <h5>Alise</h5>
                        <div className={style.Block2_stars_icons}>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                        </div>
                    </div>
                </div>
                <div className={style.Block2_flex_1_child}>
                    <div className={style.Child_content}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <img src={avatar} alt='avatar'/>
                        <h5>Alise</h5>
                        <div className={style.Block2_stars_icons}>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                            <StarIcon className={style.Stars_icons}/>
                        </div>
                    </div>
                </div>
            </div> 
            </div>
        </div>
    </div>
  )
}
