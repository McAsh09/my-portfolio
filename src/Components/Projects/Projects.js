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
                
            {/* MobiVax Project */}
              <ProjectComps title="MobiVax" 
              desc="A web app that targets vaccination of elderly and specially abled"
              langs={['ReactJs','Redux']} 
              liveLink="https://mobivax.netlify.app/"
              githubLink="https://github.com/McAsh09/error404_fullstack_hack21"
              />

            {/* Hobby Projects */}
            <ProjectComps title="Hobby Projects"
             desc="A web app that allow users to add their hobby projects, users can edit their projects and can also delete them if they wish"
             langs={['ReactJs','Redux']}
             liveLink="https://my-hobby-projects.netlify.app/"
             githubLink="https://github.com/McAsh09/hobby-projects" />

             
            {/* To-Do List */}
            <ProjectComps title="To-Do List"
             desc="A web app that allows users to create their daily tasks and delete them
             when the task is done"
             langs={['Nodejs','ejs','mongoDB']}
             liveLink="https://shrouded-mesa-70728.herokuapp.com/"
             githubLink="https://github.com/McAsh09/todo-list"
             />


             {/* Drum Kit */}
            <ProjectComps title="Drum Kit"
             desc="Made for the purpose of adding drum rolls along with having fun while
             doing so"
             langs={['VanillaJS']}
             liveLink="https://mcash09.github.io/drum-kit/"
             githubLink="https://github.com/McAsh09/drum-kit"
             />

             {/* Simon Game */}
            <ProjectComps title="Simon Game"
             desc="Implemented an electronic game of memory skill using VanillaJs and jQuery an intuitive game that is easy to learn but hard to master"
             langs={['VanillaJS', 'jQuery']}
             liveLink="https://mcash09.github.io/simon-game/"
             githubLink="https://github.com/McAsh09/simon-game"
             />

             </div>
             
        </div>
    );
}


export default Projects;