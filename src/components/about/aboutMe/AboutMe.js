import React from 'react'
import style from '../about.module.css'
import jane from '../aboutimg/image 68.png'
import Section4 from '../../main/service/section4/Section4'

export default function AboutMe() {
  return (
    <div className={style.AboutMe_container}>
        <div className={style.Parent_block}>
            <div className={style.AboutMe_content}>
                <div className={style.AboutMe_title_block}>
                    <h2>Hear out what<br></br>my clients say about me.</h2>
                    <div className={style.Flex_blocks}>
                        <div className={style.Parent_child_blocks}>
                            <div className={style.Child_blocks_1}>
                                <span className={style.Child_sp1}>5/5</span>
                                <p>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                                <h4>Jane</h4>
                                <img src={jane} alt='img'/>
                            </div>
                        </div>
                        <div className={style.Parent_child_blocks}>
                            <div className={style.Child_blocks_1}>
                                <span className={style.Child_sp2}>5/5</span>
                                <p>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                                <h4>Jane</h4>
                                <img src={jane} alt='img'/>
                            </div>
                        </div>
                        <div className={style.Parent_child_blocks}>
                            <div className={style.Child_blocks_1}>
                                <span className={style.Child_sp3}>5/5</span>
                                <p>"I gained so much confidence in my ability to connect and deepen my relationships with people. "</p>
                                <h4>Jane</h4>
                                <img src={jane} alt='img'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Section4/>
    </div>
  )
}
