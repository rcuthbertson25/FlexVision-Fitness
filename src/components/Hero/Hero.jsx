import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import Food from '../../assets/food.png'
import Dumbell from '../../assets/dumbell.svg'
import Lifter from '../../assets/squatter.png'
import LiftBack from '../../assets/hero_image_back.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
import {Link} from "react-scroll"

const Hero = () => {
  const transition = {type: 'spring', duration:2}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero" id="home">
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
        {/* start your journey */}
            <div className="the-best-ad">
              <motion.div
              initial={{left: mobile? "125px": "170px"}}
              whileInView={{left:'8px'}}
              transition={{...transition,type:'tween'}}
              ></motion.div>
              <span>start your journey today</span>
            </div>

            {/* hero heading */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Achieve </span>
                <span>Your</span>
              </div>
              <div><span>
                Dream Body</span>
              </div>
              <div>
                <span>
                  Obtain the perfect exercise and nutrition plan to fulfill your fitness goals
                </span>
              </div>
            </div>

            {/* figures */}
            <div className="figures">
              <div>
                <span></span>
                <img src={Food} width={75} height={75} alt="" />
                <span>weekly plans</span>
              </div>
              <div>
                <span></span>
                <img src={Dumbell} width={75} height={75} alt="" />
                <span>custom splits</span>
              </div>
              <div>
                <span>
                  <NumberCounter end={146} start={0} delay='1.5' />
                </span>
                <span>active users</span>
              </div>
            </div>

            {/* hero buttons */}
            <div className="hero-buttons">
              <buttons className="btn">
                <li onClick={()=>false}><Link
                  to="info"
                  spy={true}
                  smooth={true}
                >Get Started</Link></li></buttons>
              <buttons className="btn">
                <li onClick={()=>false}><Link
                  to="reasons2"
                  spy={true}
                  smooth={true}
                >Learn More</Link></li></buttons>
            </div>
          </div>
        <div className="right-h">
          <span>+1 (610) 295 5923</span>
          <button className="btn">Join Now</button>
        
          {/* hero images */}
          <img src={Lifter} alt="" className="hero-image" />
          <motion.img
          initial={{right: "5rem"}}
          whileInView={{right:'21rem'}}
          transition={transition}
          src={LiftBack} alt="" className="hero-image-back" />
        </div>
    </div>
  )
}

export default Hero