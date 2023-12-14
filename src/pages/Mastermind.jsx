import MasterMindCarousel from "../components/MasterMindCarousel";
import projects from "../data/projects.json";

const Mastermind = () => {

	return (
		<div>
			<div className="w-[34%] m-auto pt-11">
				<MasterMindCarousel />
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
export default Mastermind;