import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import {Navigate} from 'react-router-dom'

const Footer = () => {

  const redirectToGithub = () => {
    const githubProfileURL = 'https://github.com/rcuthbertson25';
    window.open(githubProfileURL, '_blank');
  };
  const redirectToLinkedIn = () => {
    const linkedinProfileURL = 'https://www.linkedin.com/in/ryan-cuthbertson-61a980281';
    window.open(linkedinProfileURL, '_blank');
  };

  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
            <div className="social-links">
              <img
                src={Github}
                alt=""
                onClick={redirectToGithub}
                style={{ cursor: 'pointer' }}
              />
                <img src={Instagram} alt="" />
              <img
                src={LinkedIn}
                alt=""
                onClick={redirectToLinkedIn}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="logo">
              <span>Flex</span>
              <span>Vision </span>
              <span>Fitness</span>
            </div>
            <span>+1 (610) 295 5923</span>
        </div>
    </div>
  )
}

export default Footer