import TenderCarousel from "../components/TenderCarousel";
import projects from "../data/projects.json";

const Tender = () => {

	return (
		<div>
			<div className="w-[80%] m-auto pt-11">
				<TenderCarousel />
			</div>
            <div className="flex justify-center gap-5 m-auto pt-5">
                <a href={projects[1].live}><button className=" bg-black text-white dark:bg-white dark:text-black px-5 py-5 rounded">Link To App</button></a>
                <a href={projects[1].git}><button className=" bg-black text-white dark:bg-white dark:text-black px-5 py-5 rounded">GitHub</button></a>
            </div>
            <div className="flex justify-center gap-5 pt-5">
                Tech Used: {projects[1].tech.map((tech, idx) => (
                    <p key={idx}>{tech}</p>
                ))}
            </div>
            <div className="flex text-center gap-5 pt-5 ml-20 mr-20">
                    <p>{projects[1].bio}</p>
            </div>
		</div>
	);
};

export default Tender;