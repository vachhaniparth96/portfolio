import { FaCss3 as CSS, FaHtml5 as HTML } from "react-icons/fa";
import { IoLogoJavascript as JavaScript } from "react-icons/io";
import { SiMongodb as MongoDB} from "react-icons/si";
import { SiNodedotjs as NodeJS} from "react-icons/si";
import { SiTailwindcss as Tailwind} from "react-icons/si";
import { FaReact as React} from "react-icons/fa";
import { SiExpress as Express} from "react-icons/si";
import { FaLinkedin as LinkedIn} from "react-icons/fa";
import { FaGithub as GitHub} from "react-icons/fa";



const Home = () => {
	return (
		<div>
			<h1 className="flex justify-center text-center font-ropa-sans text-9xl m-auto p-5">Parth Vachhani</h1>
			<p className="flex justify-center text-center font-ropa-sans text-6xl m-auto p-5">Software Engineer</p>
            <p className="flex justify-center text-center font-ropa-sans text-5xl m-auto p-5">Proficiencies: </p>
            <div className="flex flex-row justify-center">
                <ul className="flex gap-3 pb-5">
                    <li className="text-4xl"><HTML /></li> 
                    <li className="text-4xl"><CSS /></li>
                    <li className="text-4xl"><JavaScript /></li>
                    <li className="text-4xl"><Express /></li>
                    <li className="text-4xl"><NodeJS /></li>
                    <li className="text-4xl"><MongoDB /></li>
                    <li className="text-4xl"><React /></li>
                    <li className="text-4xl"><Tailwind /></li>
                </ul>
            </div>
            <div className="flex justify-center">
                <img src="../../public/assets/5eKX.gif" alt="gif"/>
            </div>
            <p className="flex justify-center text-center font-ropa-sans text-5xl m-auto p-5">Get In Touch With Me: </p>
            <div className="flex flex-row justify-center">
                <ul className="flex gap-3 pb-5">
                    <li className="text-4xl"><a href="https://www.linkedin.com/in/parthvachhani/"><button><LinkedIn /></button></a></li>
                    <li className="text-4xl"><a href="https://github.com/vachhaniparth96/"><button><GitHub /></button></a></li>
                </ul>
            </div>
        </div>
	);
};

export default Home;
