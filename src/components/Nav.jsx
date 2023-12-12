import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./styles/nav.css";

const Nav = () => {


    return (
        <nav className="flex text-center justify-around m-auto p-2 border-b border-black dark:border-white">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">My Projects</Link>
            {/* &nbsp;|&nbsp; */}
            {/* <Link to="/contact">Contact Me</Link> */}
            {/* &nbsp;|&nbsp; */}
            {/* <Link to="/resume">Resume</Link> */}
        </nav>
    )
}

export default Nav;