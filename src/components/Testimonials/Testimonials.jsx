import React, { useRef } from 'react'
import './Testimonials.css'


function Testimonials() {

        const slider = useRef();
            let tx=0;

        const slideForward=()=>{
            if(tx> -50){
                tx-=25;
            }
            slider.current.style.transform = `translateX(${tx}%)`
        }

        const slideBackward=()=>{
            if(tx< 0){
                tx+=25;
            }
            slider.current.style.transform = `translateX(${tx}%)`
        }

  return (
    <div className='testimonials'>
        <img className='next-btn' src="/src/assets/next-icon.png" alt="" onClick={slideForward} />
        <img className='back-btn' src="/src/assets/back-icon.png" alt="" onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src="/src/assets/user-1.png" alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decision i have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations. </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src="/src/assets/user-2.png" alt="" />
                            <div>
                                <h3>Priyanshu jain</h3>
                                <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decision i have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations. </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src="/src/assets/user-3.png" alt="" />
                            <div>
                                <h3>Ishu Kumari</h3>
                                <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decision i have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations. </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src="/src/assets/user-4.png" alt="" />
                            <div>
                                <h3>koi faltu insaan</h3>
                                <span>Edusity, India</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decision i have ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials