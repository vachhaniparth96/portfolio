import { Link } from 'react-router-dom';
import "./styles/nav.css";

const Nav = () => {
    
    return (
        <nav className="navStyle">
            <Link to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link to="/about">About Me</Link>
            &nbsp;|&nbsp;
            <Link to="/projects">My Projects</Link>
            {/* &nbsp;|&nbsp; */}
            {/* <Link to="/contact">Contact Me</Link> */}
            {/* &nbsp;|&nbsp; */}
            {/* <Link to="/resume">Resume</Link> */}
        </nav>
    )
}

export default Nav;