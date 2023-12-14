//Imports
import { useState, useEffect } from "react";

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
                <p className="text-xl font-mono text-center">{about.bio}</p>
                <h3 className="text-center font-mono">Contact Me At: {about.email}</h3>
            </div>
        )
    }

	return about ? loaded() : <h1>Loading About Me...</h1>;
};

export default About;
