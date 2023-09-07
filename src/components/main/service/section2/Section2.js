import React from 'react'
import style from '../service.module.css'
import icon1 from './images/Frame.png'
import icon2 from './images/Frame.svg'

export default function Section2() {
  return (
    <div className={style.Section2_container}>
        <div className={style.Section2_content}>
            <div className={style.Section2_title}>
                <h2>I can help you in these<br></br>particular areas.</h2>
            </div>
            <div className={style.Category_flex_parent}>
                <div className={style.Section2_areas_category_1}>
                    <div className={style.Section2_areas_1}>
                        <div className={style.Child_content}>
                            <img src={icon1} alt='icon1'/>
                            <h2>Group Coaching Sessions</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className={style.Section2_areas_2}>
                        <div className={style.Child_content_2}>
                            <img src={icon2} alt='icon2'/>
                            <h2>Online course</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                </div>

                {/* block-two */}

                <div className={style.Section2_areas_category_2}>
                    <div className={style.Section2_areas_3}>
                        <div className={style.Child_content_3}>
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_508_5335)">
                            <g clip-path="url(#clip1_508_5335)">
                            <path d="M62.25 45.5L52.5 35.75H29.75C28.888 35.75 28.0614 35.4076 27.4519 34.7981C26.8424 34.1886 26.5 33.362 26.5 32.5V13C26.5 12.138 26.8424 11.3114 27.4519 10.7019C28.0614 10.0924 28.888 9.75 29.75 9.75H59C59.862 9.75 60.6886 10.0924 61.2981 10.7019C61.9076 11.3114 62.25 12.138 62.25 13V45.5Z" stroke="#3F3A64" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.5 48.75V55.25C39.5 56.112 39.1576 56.9386 38.5481 57.5481C37.9386 58.1576 37.112 58.5 36.25 58.5H13.5L3.75 68.25V35.75C3.75 34.888 4.09241 34.0614 4.7019 33.4519C5.3114 32.8424 6.13805 32.5 7 32.5H13.5" stroke="#20AD96" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0_508_5335">
                            <rect width="72" height="72" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_508_5335">
                            <rect width="78" height="78" fill="white" transform="translate(-6)"/>
                            </clipPath>
                            </defs>
                        </svg>
                            <h2>Consultation</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                    <div className={style.Section2_areas_4}>
                        <div className={style.Child_content_4}>
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_508_5303)">
                            <path d="M27 12V66M18 12H51C52.5913 12 54.1174 12.6321 55.2426 13.7574C56.3679 14.8826 57 16.4087 57 18V54C57 55.5913 56.3679 57.1174 55.2426 58.2426C54.1174 59.3679 52.5913 60 51 60H18C17.2044 60 16.4413 59.6839 15.8787 59.1213C15.3161 58.5587 15 57.7956 15 57V15C15 14.2044 15.3161 13.4413 15.8787 12.8787C16.4413 12.3161 17.2044 12 18 12V12Z" stroke="#3F3A64" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39 24H45" stroke="#20AD96" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39 36H45" stroke="#20AD96" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_508_5303">
                            <rect width="72" height="72" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>

                            <h2>1:1 Coaching</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
