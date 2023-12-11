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
				<h2>{project.name}</h2>
				<img src={project.image} alt={project.name} />
				<a href={project.live}>
					<button>Link to App</button>
				</a>
				<a href={project.git}>
					<button>GitHub</button>
				</a>
			</div>
		));
	};
	return projects ? loaded() : <h1>Loading Projects...</h1>;
};

export default Projects;
