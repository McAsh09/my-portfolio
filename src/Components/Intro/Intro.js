import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import AshImage from '../../Me.jpeg';
import './Intro.css';

function Intro(){

    return(

        <div className="intro">

            <Zoom>
                <div className='intro__image'> 
                    <div className='intro__imageBack'>
                    </div> 
                        <img className="ashImage" src={AshImage} alt=""/>
                </div>
            </Zoom>

            <div className='intro__desc'>
                <Fade bottom>
                    <p className='intro__msg'>Hey! My name is</p>
                </Fade>

                <Fade bottom>
                    <h1 className='intro__head'>Ashish Kumar.</h1>                    
                </Fade>

                <Fade bottom>
                    <h1 className='intro__text'>Enthusiastic learner and anime watcher!</h1>
                </Fade>

                <Fade bottom>
                    <a href="#about" className='intro__aboutLink'>More About Me</a>
                </Fade>
            </div>
        </div>
    );
}


export default Intro;