import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import './About.css';
import Welcome from '../../Bakugo.jpg';
function About(){

    
    return(

        <div className="about" id="about">

            <h1 className='section__heading'>About</h1>
                <div className="about__section">
                    <Fade bottom>
                        <div className='about__text'>
                            Hello I am Ashish Kumar! Currently I am pursuing Computer Science from Indian Institute of Information Technology Vadodara. I am quite interested in the field of web development and also am an avid CP lover!
                        </div>
                    </Fade>
                    <Fade bottom><img src={Welcome} alt="" className="about__sectionImage"/></Fade>
                </div>               
        </div>
    );
}

export default About;