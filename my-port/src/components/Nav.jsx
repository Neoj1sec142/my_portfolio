import React from "react";
import { Link } from 'react-router-dom'


function Nav(props){
    return(
        <nav className="navbar">
            <Link to='./Resume.jsx'>Resume</Link>
            {/* <a href="">Home</a>
            <a href="https://www.linkedin.com/in/mark-harmon-805aa3232">Linked In</a>
            <a href="">Projects</a> */}
        </nav>
    )
}
export default Nav;