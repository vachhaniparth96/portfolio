import MasterMindCarousel from "../components/MasterMindCarousel";
import { useState, useEffect } from "react";

const Mastermind = () => {
	const MasterMindSlides = [
		"./assets/Mastermind/Base_Game_Screen.png",
		"./assets/Mastermind/Instructions.png",
		"./assets/Mastermind/Gameplay_And_Accuracy.png",
		"./assets/Mastermind/Lose_Screen.png",
		"./assets/Mastermind/Win_Screen.png",
		"./assets/Mastermind/Erase_Button.gif",
		"./assets/Mastermind/Submit_Button.gif",
	];

    const [projects, setProjects] = useState(null);

	const getProjectData = async () => {
		const response = await fetch("../../public/projects.json");
		const data = await response.json();
		setProjects(data);
	};

	useEffect(() => {
        getProjectData()
    }, []);

    const loading = () => {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    const loaded = () => {
	return (
		<div>
			<div className="w-[35%] m-auto pt-11">
				<MasterMindCarousel MasterMindSlides={MasterMindSlides} />
			</div>
            <div className="flex justify-center gap-5 m-auto pt-5">
                <a href={projects[0].live}><button className=" bg-black text-white dark:bg-white dark:text-black px-5 py-5 rounded">Link To App</button></a>
                <a href={projects[0].git}><button className=" bg-black text-white dark:bg-white dark:text-black px-5 py-5 rounded">GitHub</button></a>
            </div>
            <div className="flex justify-center gap-5 pt-5">
                Tech Used: {projects[0].tech.map((tech, idx) => (
                    <p key={idx}>{tech}</p>
                ))}
            </div>
            <div className="flex text-center gap-5 pt-5 ml-20 mr-20">
                <p>{projects[0].bio}</p>
            </div>
		</div>
	);
}
    return projects ? loaded() : loading();
}
export default Mastermind;