//Imports
import { Link } from "react-router-dom";
import projects  from "../data/projects.json";



const Projects = () => {

	const loaded = () => {
		return (
            <div>
                {projects.map((project, idx) => (
			<div key={idx}>
				<h2 className="p-3 text-center font-bold text-2xl">{project.name}</h2>
				<div className="flex justify-center items-center m-auto w-[60%]">
                <img src={`${project.image}`} alt={project.name} />
                </div>
                <p className="p-3 text-center italic text-xl">{project.about}</p>
                <p className="p-3 text-center font-semibold underline italic text-xl">Some Tech Used</p>
                <div className="flex space-between justify-center gap-5">
                    {project.sometech.map((tech, idx) => (
                        <p key={idx}>{tech}</p>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-3">
                <Link to={`/${project.name}`}><button className=" bg-black text-white dark:bg-white dark:text-black px-5 py-5 rounded">Learn More</button></Link>
                </div>
			</div>
		))};
            </div>
        )
	};
	return projects ? loaded() : <h1>Loading Projects...</h1>;
};

export default Projects;
