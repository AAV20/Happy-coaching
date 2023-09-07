import React from 'react'
import style from './footer.module.css'
import footerlogo from './footerimg/Group 6 (1).png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={style.Footer_container}>
        <div className={style.Notified_container}>
            <div className={style.Notified_content}>
                <div className={style.Notified_text_block}>
                    <h2>Get notified when<br></br>I publish new articles</h2>
                    <p>Stay up to date with the latest news, announcements, and articles.</p>
                </div>
                <div className={style.Notified_input_block}>
                    <input type='email' placeholder='Enter your email'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        <div className={style.Footer_content}>
            <div className={style.Footer_logo}>
                <img src={footerlogo} alt='logo'/>
                <p>Design amazing digital experiences<br></br>that create more happy in the world.</p>
            </div>
            <div className={style.Footer_pages_block}>
                <ul>
                    <h4>Pages</h4>
                    <NavLink className={style.Footer_link} to='/'>Home</NavLink>
                    <NavLink className={style.Footer_link} to='/service'>Services</NavLink>
                    <NavLink className={style.Footer_link} to='/about'>About us</NavLink>
                    <NavLink className={style.Footer_link} to='/extra'>Extra sales/Landingpages</NavLink>
                    <NavLink className={style.Footer_link} to='/freeGuide'>Free guide</NavLink>
                </ul>
            </div>
            <div className={style.Footer_contact_block}>
                <h4>Contact</h4>
                <span>+123 456 789</span>
                <a href='hello@happydigital.nl'>hello@happydigital.nl</a>
                <span>Instagram</span>
                <span>Linkedin</span>
            </div>
        </div>
        <hr></hr>
        <div className={style.Footer_social_block}>
            <span>Made with a by HappyDigital</span>
            <div className={style.Footer_social_icons_block}>
                <LinkedInIcon className={style.Icons}/>
                <FacebookIcon className={style.Icons}/>
                <SportsBasketballIcon className={style.Icons}/>
            </div>
        </div>
    </div>
  )
}
