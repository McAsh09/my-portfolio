import React from 'react';
import { GrLinkedinOption,GrInstagram,GrGithub,GrTwitter,GrMail } from "react-icons/gr";
import './Footer.css';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className='footer'>
        <Fade bottom><p className='footer__socialHead'>&lt;Social /&gt;<br/></p>
        <ul className='footer__social'>      
        
         <a href="https://www.instagram.com/ash_the_ish/" target="_blank" rel="noopener noreferrer"><GrInstagram /></a>
         <a href="https://www.linkedin.com/in/ashish-kumar-780a3a1a4/" target="_blank" rel="noopener noreferrer"><GrLinkedinOption /></a>
         <a href="https://github.com/McAsh09" target="_blank" rel="noopener noreferrer"><GrGithub /></a>
         <a href="mailto:mcash0907@gmail.com" target="_blank" rel="noopener noreferrer"><GrMail /></a>

        </ul>
        </Fade>
        <Fade bottom><h3 className='footer__head'> Designed and Developed By Ashish Kumar</h3></Fade> 
      </div> 
    )
}

export default Footer;