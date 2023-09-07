import React, { useEffect, useState } from 'react'
import style from './extra.module.css'
import Block3 from '../freeGuide/block3/Block3'
import Video from '../freeGuide/video/Video'
import Block2 from '../freeGuide/block2/Block2'
import Checkicon from './extraimg/Check icon.png'
import Session from '../main/home/Session'

export default function Extra() {
    const [extraImg, setExtraImg]= useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/N0I4Yo/extradataimg')
        .then((stream)=> stream.json())
        .then((extradata)=> setExtraImg(extradata))
    })
  return (
    <div className={style.Parent_block}>
        <div className={style.Extra_container}>
            <svg  className={style.Wave} width="101" height="17" viewBox="0 0 101 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.2609 4.32287L38.3456 17L50.5232 4.32287L62.6544 17L74.7391 4.32287L86.8702 17L101 2.23427L98.8155 0L86.8702 12.4828L74.925 0L74.7391 0.194298L74.5996 0L62.6544 12.4828L50.6627 0L50.5232 0.194298L50.3373 0L38.3456 12.4828L26.4004 0L26.2609 0.194298L26.075 0L14.1298 12.4828L2.18454 0L0 2.23427L14.1298 17L26.2609 4.32287Z" fill="#20AD96"/>
            </svg>
            <div className={style.Extra_content}>
                <div className={style.Extra_text_block}>
                    <small>Proven strategies backed by science for success.</small>
                    <h2>Self Esteem<br></br>Therapy</h2>
                    <p>
                        I help people to discover their true potential and live a fulfilling life...
                        Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
                    </p>
                    <button>Claim your spot</button>
                </div>
                {
                extraImg.length && extraImg.map((itam)=>(
                    <div className={style.Extra_image_block}>
                        <img src={itam.img} alt='img'/>
                    </div>
                ))
                }
            </div>
        </div>
        <Block3/>
        <Video/>
        <Block2/>
        <div className={style.Perfect_container}>
            <div className={style.Perfect_content}>
                <div className={style.Perfect_text_block}>
                    <small>This is not for everyone!</small>
                    <h2>This program<br></br>is perfect for you if...</h2>
                </div>
                <div className={style.Perfect_texts_flex_block}>
                    <div className={style.Perfect_text_flex_1}>
                        <h4>This is NOT for you if...</h4>
                        <br></br>
                        <br></br>
                        <div className={style.Text_flex_mini_blocks}>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20.3333C14.6024 20.3333 18.3333 16.6024 18.3333 12C18.3333 7.39763 14.6024 3.66667 10 3.66667C5.39763 3.66667 1.66667 7.39763 1.66667 12C1.66667 16.6024 5.39763 20.3333 10 20.3333ZM10 22C4.47715 22 0 17.5228 0 12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12C20 17.5228 15.5228 22 10 22Z" fill="#EB4646"/>
                            <path d="M10 11.1113L13.1113 8L14 8.88875L10.8887 12L14 15.1113L13.1113 16L10 12.8887L6.88875 16L6 15.1113L9.11125 12L6 8.88875L6.88875 8L10 11.1113Z" fill="#EB4646"/>
                            </svg>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className={style.Text_flex_mini_blocks}>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20.3333C14.6024 20.3333 18.3333 16.6024 18.3333 12C18.3333 7.39763 14.6024 3.66667 10 3.66667C5.39763 3.66667 1.66667 7.39763 1.66667 12C1.66667 16.6024 5.39763 20.3333 10 20.3333ZM10 22C4.47715 22 0 17.5228 0 12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12C20 17.5228 15.5228 22 10 22Z" fill="#EB4646"/>
                            <path d="M10 11.1113L13.1113 8L14 8.88875L10.8887 12L14 15.1113L13.1113 16L10 12.8887L6.88875 16L6 15.1113L9.11125 12L6 8.88875L6.88875 8L10 11.1113Z" fill="#EB4646"/>
                            </svg>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className={style.Text_flex_mini_blocks}>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20.3333C14.6024 20.3333 18.3333 16.6024 18.3333 12C18.3333 7.39763 14.6024 3.66667 10 3.66667C5.39763 3.66667 1.66667 7.39763 1.66667 12C1.66667 16.6024 5.39763 20.3333 10 20.3333ZM10 22C4.47715 22 0 17.5228 0 12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12C20 17.5228 15.5228 22 10 22Z" fill="#EB4646"/>
                            <path d="M10 11.1113L13.1113 8L14 8.88875L10.8887 12L14 15.1113L13.1113 16L10 12.8887L6.88875 16L6 15.1113L9.11125 12L6 8.88875L6.88875 8L10 11.1113Z" fill="#EB4646"/>
                            </svg>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className={style.Text_flex_mini_blocks}>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20.3333C14.6024 20.3333 18.3333 16.6024 18.3333 12C18.3333 7.39763 14.6024 3.66667 10 3.66667C5.39763 3.66667 1.66667 7.39763 1.66667 12C1.66667 16.6024 5.39763 20.3333 10 20.3333ZM10 22C4.47715 22 0 17.5228 0 12C0 6.47715 4.47715 2 10 2C15.5228 2 20 6.47715 20 12C20 17.5228 15.5228 22 10 22Z" fill="#EB4646"/>
                            <path d="M10 11.1113L13.1113 8L14 8.88875L10.8887 12L14 15.1113L13.1113 16L10 12.8887L6.88875 16L6 15.1113L9.11125 12L6 8.88875L6.88875 8L10 11.1113Z" fill="#EB4646"/>
                            </svg>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div className={style.Perfect_text_flex_2}>
                        <div className={style.Child_text_flex}>
                            <h4>This is for you if...</h4>
                            <br></br>
                            <br></br>
                            <div className={style.Text_flex_mini_blocks}>
                                <img src={Checkicon} alt=''/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={style.Text_flex_mini_blocks}>
                                <img src={Checkicon} alt=''/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={style.Text_flex_mini_blocks}>
                                <img src={Checkicon} alt=''/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={style.Text_flex_mini_blocks}>
                                <img src={Checkicon} alt=''/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Session/>
    </div>
  )
}
