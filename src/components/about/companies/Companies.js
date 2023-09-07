import React from 'react'
import style from '../about.module.css'
import laers from '../aboutimg/Logomark.png'
import sisypush from '../aboutimg/Logomark (1).png'
import circoles from '../aboutimg/Logomark (2).png'
import catalog from '../aboutimg/Logomark (3).png'
import quotient from '../aboutimg/Logomark (4).png'

export default function Companies() {
  return (
    <div className={style.About_companies_block}>
        <div className={style.Companies_flex_block}>
            <h3>From startups to the world’s largest companies</h3>
            <div className={style.Companies_block}>
                <div>
                    <img src={laers} alt='logo'/>
                    <h4>Laers</h4>
                </div>
                <div>
                    <img src={sisypush} alt='logo'/>
                    <h4>Sisypush</h4>
                </div>
                <div>
                    <img src={circoles} alt='logo'/>
                    <h4>Circoles</h4>
                </div>
                <div>
                    <img src={catalog} alt='logo'/>
                    <h4>Catalog</h4>
                </div>
                <div>
                    <img src={quotient} alt='logo'/>
                    <h4>Quotient</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
