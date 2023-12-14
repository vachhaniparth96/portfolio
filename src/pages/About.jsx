//Imports
import { useState, useEffect } from "react";
import { ImProfile as Resume} from "react-icons/im";
import { FaLinkedin as LinkedIn} from "react-icons/fa";
import { FaGithub as GitHub} from "react-icons/fa";

const About = (props) => {
    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        const response = await fetch("./about.json")
        const data = await response.json()
        setAbout(data)
    }

    useEffect(() => {
        getAboutData()
    }, [])

    const loaded = () => {
        return (
            <div>
                <p className="text-3xl font-ropa-sans text-center m-auto p-10">{about.bio}</p>
                <p className="flex justify-center text-center font-ropa-sans text-5xl m-auto p-5">Get to know more about me: </p>
            <div className="flex flex-row justify-center">
                <ul className="flex gap-3 pb-5">
                <li className="text-4xl"><a href="../../public/assets/Parth Vachhani - ATS Resume Template.docx" download><button><Resume /></button></a></li>
                    <li className="text-4xl"><a href="https://www.linkedin.com/in/parthvachhani/"><button><LinkedIn /></button></a></li>
                    <li className="text-4xl"><a href="https://github.com/vachhaniparth96/"><button><GitHub /></button></a></li>
                </ul>
            </div>
            <p className="flex justify-center text-center font-ropa-sans text-3xl m-auto p-5">Or contact me via email at: {about.email} </p>
            </div>
        )
    }

	return about ? loaded() : <h1>Loading About Me...</h1>;
};

export default About;
