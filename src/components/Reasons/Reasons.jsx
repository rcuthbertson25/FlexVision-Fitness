import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"

export const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
        <div className="blur reasons-blur-1"></div>
        <div className="blur reasons-blur-2"></div>
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r" id="reasons2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <span>some reasons</span>

            <div>
                <span className='stroke-text2'>why</span>
                <span> choose us?</span>
            </div>

        <div className='details-r'>
            <div>
                <img src={tick} alt=""></img>
                <span>FREE!</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>PERSONALIZED WORKOUTS TO FIT YOUR FITNESS GOALS</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>CUSTOM MEAL PLANS</span>
            </div>
            <div>
                <img src={tick} alt="" />
                <span>EASY TO USE AND AVAILABLE WITHIN SECONDS</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reasons;
