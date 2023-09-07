import React from 'react'
import style from '../service.module.css'
import minus from '../serviceImg/Icon wrap.png'
import plus from '../serviceImg/Icon wrap (1).png'


export default function Section4() {
  return (
    <div className={style.Section4_container}>
        <div className={style.Section4_content}>
            <div className={style.Section4_title_block}>
                <h2>Good to know.</h2>
                <p>Everything you need to know about the my services.</p>
            </div>
            <div className={style.About_service_block}>
                <div className={style.About_service_child}>
                    <div>
                        <h5>How long does the coaching process take?</h5>
                        <p>
                            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
                        </p>
                    </div>
                    <img src={minus} alt='minus'/>
                </div>
                <hr></hr>
                <div className={style.About_service_child}>
                    <h5>What if I wanted to end my coaching engagement?</h5>
                    <img src={plus} alt='plus'/>
                </div>
                <hr></hr>
                <div className={style.About_service_child}>
                    <h5>Can I change through coaching?</h5>
                    <img src={plus} alt='plus'/>
                </div>
                <hr></hr>
                <div className={style.About_service_child}>
                    <h5>How often do we meet?</h5>
                    <img src={plus} alt='plus'/>
                </div>
                <hr></hr>
            </div>
        </div>
        <div className={style.Questions_block}>
            <div className={style.Questions_block_content}>
                <div className={style.Questions_text_content}>
                    <h4>Still have questions?</h4>
                    <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    <button>Get in touch</button>
                </div>
            </div>
        </div>
    </div>
  )
}
