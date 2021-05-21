import React from 'react';
import Fade from 'react-reveal/Fade';
import './Projects.css';
import ProjectComps from './ProjectComps/ProjectComps';

function Projects(){

    return(

        <div className="projects" id="projects">

        <Fade bottom>
            <h1 className='section__heading'>Projects</h1>
        </Fade>
            
            <div className="projects__projectCont">
                
            {/* Netflix clone project */}
              <ProjectComps title="Netflix Clone" 
              desc="A netflix clone created by using React and taking the use of API from TMDB and hosting the web app by using firebase"
              langs={['React','Redux','Firebase']} 
              liveLink="https://github.com/McAsh09"
              githubLink="https://github.com/McAsh09"
              />

            {/* To-Do App */}
            <ProjectComps title="To-Do App"
             desc="A basic to-do app created using JS with minimal HTML and CSS"
             langs={['Javascript']}
             liveLink="https://dotodaynow.netlify.app/"
             githubLink="https://github.com/McAsh09/to-do-list" />

             
            {/* CSS Background Generator */}
            <ProjectComps title="CSS Background Generator"
             desc="A web app designed for users to generate a background to their liking and also copy its code along with it"
             langs={['Javascript']}
             liveLink="https://css-gen.netlify.app/"
             githubLink="https://github.com/McAsh09/CSS-Background-Generator"
             />

             </div>
             
        </div>
    );
}


export default Projects;