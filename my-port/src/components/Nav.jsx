import { Link } from 'react-router-dom'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
//Still need to npm i the favicon for react


function Nav(){
    return(
        <header>
        <div className='nav-bar'>
          <Link to='/' style={{ color: '#FFFFFF' }} className='link'>Home</Link>
          <Link to='/About' style={{ color: '#FFFFFF' }} className='link'>About</Link>
          <Link to='/Resume' style={{ color: '#FFFFFF' }} className='link'>Resume</Link>
          <Link to='/Portfolio' style={{ color: '#FFFFFF' }} className='link'>My Projects</Link>
          <Link to='/Contact' style={{ color: '#FFFFFF' }} className='link'>Contact me</Link>
          <div className="Footer">
            <a href="https://www.linkedin.com/in/mark-harmon-805aa3232/" 
              className="linkedin"
              target="_blank" 
              rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </header>
    )
}
export default Nav;