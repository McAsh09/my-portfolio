import React from 'react';
import Fade from 'react-reveal/Fade';
import { FaLink, FaGithub} from 'react-icons/fa';
import './ProjectComps.css';

const ProjectComps = ({title,desc,langs,liveLink,githubLink}) => {
    return (
        <Fade bottom>
        <div className='project'>
            <div className="project__basicInfo">
                <h2 className="project__title">{title}</h2>
                    <div className="project__langs">
                        {
                            langs.map( lang => (
                                <span key={Math.random()} className="project__lang">{lang}</span>
                            ))
                        }
            </div>
            <div className='project__links'>            

                { liveLink && <a href={liveLink} target="_blank"><FaLink /></a>}
                <a href={githubLink} target="_blank" ><FaGithub /></a>

            </div>
        </div>
       
    
        <div className="project__detail">
            <p className="project__desc">{desc}</p>
        </div>
      
        </div>
        </Fade>
    )
}

export default ProjectComps;