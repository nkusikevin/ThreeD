import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div className='bg'>
			<Navigation />

			<div className='mt-20 px-10 w-6/12'>
				<h1 className='text-9xl font-bold font-mono'>Work</h1>
				<p className='text-4xl font-mono font-semibold'>Pixel as nature</p>
				<p className='mt-4 text-lg font-medium font-mono'>
					we moved past the myth that our world is flat - but we're still
					designing in blocks and flat color . As our digital interface start to
					overlay the world and our realities mix digital design in final living
					in three-dimensions
				</p>
			</div>
		</div>
	);
}

export default App;
