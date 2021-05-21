import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../../finalLogo.png';

import { HiMenuAlt3,HiOutlineX } from "react-icons/hi";
import './Header.css';

function Header(){

    const[showNav,setShowNav] = useState(false);

    return(

        <Fade top>
        <nav className="navbar">
            <div className="main__navbar">
                <img className="navbar__logo" src={Logo} alt="" />

                <ul className="navbar__list--desktop">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>                    
                </ul>

               

                {/* For mobile devices */}
                <span className="navbar__mobile--icon" onClick={() => setShowNav(prev => !prev)}>{showNav ? <HiOutlineX /> : <HiMenuAlt3 />}</span>
                    <ul className={showNav ? 'navbar__list--mobile navbar__list--mobileShow' : 'navbar__list--mobile'}>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
            </div>
        </nav>    
        </Fade>
    );
}

export default Header;