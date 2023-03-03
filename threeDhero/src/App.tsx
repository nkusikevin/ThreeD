import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import SocialMedia from "./components/SocialMedia";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import Model from "./components/Model";

function App() {
	return (
		<div className='bg relative'>
			<Navigation />

			<div className='absolute bottom-20 lg:bottom-2/4 top-2/4'>
				<div className=' px-10 w-6/12'>
					<h1 className='text-8xl font-bold font-mono text-gray-400'>
						Etherium
					</h1>
					<p className='text-3xl font-mono font-semibold text-gray-400'>
						Next Generation Digital Currency
					</p>
					<p className='mt-4 text-lg font-medium font-mono text-gray-400'>
						we moved past the myth that our world is flat - but we're still
						designing in blocks and flat color . As our digital interface start
						to overlay the world and our realities mix digital design in final
						living in three-dimensions
					</p>
				</div>
			</div>
			<Canvas className='canvas' shadows flat>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<spotLight
					position={[0, 7, 0]}
					color={"white"}
					angle={0.7}
					penumbra={0}
					intensity={12}
					distance={100}
					castShadow
				/>
				<spotLight
					position={[0, -7, 0]}
					color={"white"}
					angle={1}
					penumbra={1}
					intensity={12}
					distance={100}
					castShadow
				/>

				<spotLight
					position={[7, 0, 0]}
					color={"#b6b8b6"}
					angle={1}
					penumbra={0}
					intensity={12}
					distance={100}
					castShadow
				/>
				<OrbitControls
					enablePan={false}
					enableZoom={false}
					minPolarAngle={Math.PI / 2.2}
					maxPolarAngle={Math.PI / 2.2}
				/>
				<Center>
					<Model />
				</Center>
			</Canvas>
			<SocialMedia />
			<div className='absolute bottom-9 right-20 flex flex-row'>
				<div className='border  border-gray-400 mr-1'></div>
				<h1 className='text-lg font-bold text-gray-400'>choped by Kevin</h1>
			</div>
		</div>
	);
}

export default App;
