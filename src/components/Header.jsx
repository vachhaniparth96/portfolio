//Imports
import Nav from "./Nav"
import "./styles/header.css"
import { useState } from "react";

const Header = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        setDarkMode(!darkMode)
    }

    const isDarkMode = () => {
        return document.documentElement.classList.contains("dark");
    }


    return (
        <div >
            <h1 className="navStyle text-5xl font-bold italic underline flex-intial text-center p-5">Parth's Portfolio</h1>
            <Nav />
            <button onClick={() => toggleDarkMode()} className="absolute right-10 top-5 bg-black text-white dark:bg-white dark:text-black px-5 py-5 rounded"> { isDarkMode() ? "Light" : "Dark" } Mode</button>
            {console.log(darkMode)}
        </div>
    )
}

export default Header;