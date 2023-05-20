import { useRef } from "react";
import {
	OrbitControls,
	Bounds,
	BakeShadows,
	useHelper,
	Environment,
} from "@react-three/drei";
import Office from "./Office";
import { useFrame } from "@react-three/fiber";
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
			<Environment preset='city' />
			{/* <hemisphereLight intensity={0.125} color='#8040df' groundColor='red' /> */}
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
			<BakeShadows />

			<OrbitControls
				makeDefault
				// minAzimuthAngle={0}
				// maxAzimuthAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 3}
				maxPolarAngle={Math.PI / 3}
				enableZoom={true}
				enablePan={true}
				zoomSpeed={0.3}
			/>
			<gridHelper args={[1000, 100, "#555", "white"]} position={[0, -4, 0]} />
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
