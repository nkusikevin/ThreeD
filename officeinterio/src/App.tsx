import { useRef } from "react";
import {
	OrbitControls,
	Bounds,
	BakeShadows,
	useHelper,
	Environment,
	
} from "@react-three/drei";
import Office from "./Office";
import { useControls } from "leva";

function App() {
	
	//change the background color
	const { color } = useControls({
		color: {
			value: "#000000",
			label: "Background Color",
			min: 0,
			max: 1,
			step: 0.01,
			color: true,
		}, 
	});
	return (
		<>
			<color attach='background' args={[color]} />
			<ambientLight intensity={0.01} />
			//add fog on the grid 
			{/* <Environment preset='city' /> */}
			<spotLight
				castShadow
				color='orange'
				intensity={2}
				position={[-50, 50, 40]}
				angle={0.25}
				penumbra={1}
				shadow-mapSize={[128, 128]}
				shadow-bias={0.00005}
			/>

			<Bounds fit clip observe margin={1}>
				<Office />
			</Bounds>

			<spotLight
				intensity={1}
				position={[0, 3.5, 2]}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>
			<spotLight
				intensity={0.2}
				position={[-5, 2.5, 4]}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
			<spotLight
				intensity={0.2}
				position={[5, 2.5, 4]}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
			/>
			<spotLight
				intensity={0.3}
				position={[0, -2, -8]}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>
			<OrbitControls
				minDistance={1}
				maxDistance={3}
				minPolarAngle={0.0}
				maxPolarAngle={Math.PI / 2 - 0.1}
				enablePan={false}
				target={[0, 1, 0]}
			/>
			<gridHelper args={[50, 25, "#101010", "#101010"]} position={[0, 0, 0]} />
			<mesh
				scale={200}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -4, 0]}
				receiveShadow>
				<planeGeometry args={[1000, 1000, 1, 1]} />
				<shadowMaterial transparent opacity={0.2} />
			</mesh>
		</>
	);
}

export default App;
