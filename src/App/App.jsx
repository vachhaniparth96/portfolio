//Imports
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//Components
import Header from "../components/Header"
import Footer from "../components/Footer"

//Pages
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"

function App() {
	return (
		<div className="bg-white dark:bg-slate-800">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
