import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SocialMedia from "./components/SocialMedia";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

function App() {
	return (
		<div className='bg relative'>
			<Navigation />

			<div className='absolute bottom-20'>
				<div className=' px-10 w-6/12'>
					<h1 className='text-9xl font-bold font-mono'>Work</h1>
					<p className='text-4xl font-mono font-semibold'>Pixel as nature</p>
					<p className='mt-4 text-lg font-medium font-mono'>
						we moved past the myth that our world is flat - but we're still
						designing in blocks and flat color . As our digital interface start
						to overlay the world and our realities mix digital design in final
						living in three-dimensions
					</p>
				</div>
			</div>
			<Canvas className='canvas'>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<OrbitControls makeDefault />
				<mesh>
					<boxBufferGeometry args={[3, 3, 3]} />
					<meshStandardMaterial color='hotpink' />
				</mesh>
			</Canvas>
			<SocialMedia />
			<div className='absolute bottom-9 right-20 flex flex-row'>
				<div className='border  border-black'></div>
				<h1 className='text-lg font-bold'>choped by Kevin</h1>
			</div>
		</div>
	);
}

export default App;
