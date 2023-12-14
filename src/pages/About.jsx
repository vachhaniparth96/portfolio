//Imports
import { useState, useEffect } from "react";
import { HiOutlineMail as Email} from "react-icons/hi";
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
                <p className="flex justify-center text-center font-ropa-sans text-5xl m-auto p-5">Get In Touch With Me: </p>
            <div className="flex flex-row justify-center">
                <ul className="flex gap-3 pb-5">
                    <li className="text-4xl"><Email /></li> 
                    <li className="text-4xl"><LinkedIn /></li>
                    <li className="text-4xl"><GitHub /></li>
                </ul>
            </div>
            </div>
        )
    }

	return about ? loaded() : <h1>Loading About Me...</h1>;
};

export default About;
