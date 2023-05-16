import { useRef } from "react";
import {
	OrbitControls,
	Bounds,
	BakeShadows,
	useHelper,
} from "@react-three/drei";
import Office from "./Office";
import { useFrame } from "@react-three/fiber";

function App() {
	// const planeRef = useRef<any>();

	// useFrame(({ camera }) => {
	// 	planeRef.current.position.copy(camera.position);
	// });

	// useHelper(planeRef, PlaneHelper);
	return (
		<>
			<color attach='background' args={["#252530"]} />
			<ambientLight intensity={0.01} />
			<hemisphereLight intensity={0.125} color='#8040df' groundColor='red' />
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

			{/* <Bounds fit clip observe margin={1}>
				<Office />
			</Bounds>
			<BakeShadows /> */}

			<OrbitControls
				makeDefault
				minAzimuthAngle={0}
				maxAzimuthAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 3}
				maxPolarAngle={Math.PI / 3}
				enableZoom={true}
				enablePan={true}
				zoomSpeed={0.3}
			/>
			<gridHelper
				args={[1000, 200, "#151515", "#020202"]}
				position={[0, -4, 0]}
			/>
			<mesh
				scale={200}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -4, 0]}
				receiveShadow>
				<planeGeometry args={[1000, 1000, 1, 1]} />
				<shadowMaterial transparent opacity={0.3} />
			</mesh>
		</>
	);
}

export default App;
