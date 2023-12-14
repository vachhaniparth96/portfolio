import TenderCarousel from "../components/TenderCarousel";
import { useState, useEffect } from "react";

const Tender = () => {
    const TenderSlides = [
        "./Tender/Home_Page.png",
        "./Tender/filter.png",
        "./Tender/restaurants.png",
        "./Tender/users.png",
        "./Tender/Like_Dislike_Save.png",
        "./Tender/Review.png"
    ]

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
			<div className="w-[80%] m-auto pt-11">
				<TenderCarousel TenderSlides={TenderSlides} />
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
}
    return projects ? loaded() : loading();
};

export default Tender;