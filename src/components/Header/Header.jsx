import React, { useState } from 'react'
import './Header.css'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll"
const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened,setMenuOpened] = useState(false);

  return (
    <div className="header">
        <div className="logo">
          <span>Flex</span>
          <span>Vision </span>
          <span>Fitness</span>
        </div>
        {menuOpened === false && mobile === true ? (
          <div
            style={{
              backgroundColor: "var(--appColor)",
              padding: "0.5rem",
              borderRadius: "5px"
            }}
            onClick={()=> setMenuOpened(true)}
          >
            <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
          </div>
        ) : (
          <ul className='header-menu'>
              <li onClick={()=>setMenuOpened(false)}><Link
                onClick={()=>setMenuOpened(false)}
                to='home'
                spy={true}
                smooth={true}
                >Home</Link></li>
              <li onClick={()=>setMenuOpened(false)}><Link
                onClick={()=>setMenuOpened(false)}
                to='gym'
                spy={true}
                smooth={true}
                >Gym</Link></li>
              <li onClick={()=>setMenuOpened(false)}><Link
                onClick={()=>setMenuOpened(false)}
                to='diet'
                spy={true}
                smooth={true}
                >Nutrition</Link></li>
              <li onClick={()=>setMenuOpened(false)}><Link
                onClick={()=>setMenuOpened(false)}
                to='reasons2'
                spy={true}
                smooth={true}
                >About</Link></li>
          </ul>
        )}
    </div>
  )
}

export default Header