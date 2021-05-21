import React, { useState,useEffect} from 'react';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Logo from './finalLogo.png';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {

  const[loading,setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div className="App">
      {
        loading ?  
        <div className="app__loader">         
            <Zoom>
              <div className="app__loaderImageParent">
                <img className="app__loaderImage" src={Logo} alt=""/>
              </div>
            </Zoom>          
        </div>
        : 
        <>
          <Header />
          <Intro />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
