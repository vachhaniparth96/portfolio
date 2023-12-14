//Imports
import "./App.css";
import { Route, Routes } from "react-router-dom";

//Components
import Header from "../components/Header"
import Footer from "../components/Footer"

//Pages
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Mastermind from "../pages/Mastermind";
import Tender from "../pages/Tender";

function App() {
	return (
		<div className="bg-white dark:bg-slate-800">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/Mastermind" element={<Mastermind />} />
				<Route path="/Tender" element={<Tender />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
