import React, { useState } from 'react'
import NavElement from './NavElement'

const NavMenu = () => {
    const [isToggled , setToggle] = useState(false)
    const Toggle = () => {
        setToggle(!isToggled)
        if (!isToggled)
         {document.body.style.overflow='hidden';}
         else{
            document.body.style.overflow='unset';
         }
    };
    return (
        <div  className="nav__menu">
            <div onClick={Toggle} className={isToggled? 
            "hamburger active" : "hamburger"}>
                <div className="hambox">
                    <div className="hambox__inner"></div>
                </div>
            </div>
            <aside className={isToggled? 
            "menu__sidebar active" : "menu__sidebar"}>
                <NavElement/>
            </aside>
        </div>
    )
}

export default NavMenu
