import React from 'react'
import style from '../freeGuide.module.css'

export default function Block1() {
  return (
    <div className={style.Block1_container}>
        <div className={style.Block1_contenyt}>
            <div className={style.Block1_title_block}>
                <div className={style.Block1_title_child_block}>
                    <small>Testimonials</small>
                    <h2>Results that speak for themselves</h2>
                </div>
                <button>Get started</button>
            </div>
        </div>
    </div>
  )
}
