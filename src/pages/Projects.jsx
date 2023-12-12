//Imports
import { useState, useEffect } from "react";

const Projects = (props) => {
	const [projects, setProjects] = useState(null);

	const getProjectData = async () => {
		const response = await fetch("./projects.json");
		const data = await response.json();
		setProjects(data);
	};

	useEffect(() => {
        getProjectData()
    }, []);

	const loaded = () => {
		return projects.map((project, idx) => (
			<div key="idx">
				<h2 className="p-3 text-center font-bold text-2xl">{project.name}</h2>
				<div className="flex justify-center items-center m-3">
                <img src={`${project.image}`} alt={project.name} />
                </div>
                <div className="flex justify-center items-center">
				<a href={project.live}>
					<button  className="bg-black text-white dark:bg-white dark:text-black m-3 px-5 py-5 rounded">Link to App</button>
				</a> 
				<a href={project.git}>
					<button className=" bg-black text-white dark:bg-white dark:text-black px-5 py-5 rounded">GitHub</button>
				</a>
                </div>
			</div>
		));
	};
	return projects ? loaded() : <h1>Loading Projects...</h1>;
};

export default Projects;
