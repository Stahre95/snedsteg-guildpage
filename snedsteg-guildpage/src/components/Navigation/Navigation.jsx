import React, { useState, useEffect } from 'react';
import { FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import '../Navigation/Navigation.css'


function Navigation() {
  const [menuClicked, setMenuClicked] = useState(false);
  {
    /*{() => {animationOnClick(dispatch, 'homeButton')}}*/
  }

  const menuActive = () => {
    if(menuClicked) {
        return (
            <div className="navigation-menu-faclose">
                <AiOutlineClose />
            </div>
        )
    }else {
        return (
            <div className="navigation-menu-fabars">
                <FaBars />
            </div>
        )
    }
}

function handleClick () {
  setMenuClicked(!menuClicked)
}

  return (
    <div className="navigation-container">
            <div className="navigation-name"><span>SNEDSTEG</span></div>
            <div className="navigation-menu-icon" onClick={handleClick}>
                    {menuActive()}
                </div>
            <div className={menuClicked ? "navigation-menu-open" : "navigation-menu"}>
                <div className="navigation-menu-item" onClick="">Om Oss</div>
                <div className="navigation-menu-item" onClick="">Video</div>
                <div className="navigation-menu-item" onClick="">Citat</div>
                <div className="navigation-menu-item" onClick=""><span>Apply</span></div>
            </div>
        </div>
  );
}

export default Navigation;
