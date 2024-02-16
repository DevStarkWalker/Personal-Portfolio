// MainScreen.js
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import MatrixBackground from './MatrixBackground'; // Import MatrixBackground
import './MainScreen.css';
import Section from './Section';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const MainScreen = () => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.main-screen', {
      duration: 1000,
      scale: 0.5,
    });

    // Trigger the animation when the component is mounted
    document.querySelector('.main-screen').classList.add('reveal');
  }, []);

  return (
    <div>
      <MatrixBackground /> {/* Add MatrixBackground component here */}
      <div className="main-screen">
        <div className="content">
          <h1>Devon Walker</h1>
          <p>Software Engineer | Unity Developer</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon style={{ fontSize: 40, marginRight: 10 }} />
            </a>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
              <GitHubIcon style={{ fontSize: 40 }} />
            </a>
          </div>
          <button>Portfolio</button>
          <button>Career</button>
          <button>About Me</button>
        </div>
      </div>
      <Section />
    </div>
  );
};

export default MainScreen;


