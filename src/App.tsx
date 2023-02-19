import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	Environment,
	AccumulativeShadows,
	RandomizedLight,
	MeshReflectorMaterial,
} from "@react-three/drei";
import Lightforms from "./components/Lightforms";
import Model from "./components/Model";
import { Color } from "lamina";

function App() {
	const [degraded, degrade] = useState(false);
	return (
		<Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
			<color attach='background' args={["#15151a"]} />
			<OrbitControls
				enablePan={false}
				enableZoom={false}
				minPolarAngle={Math.PI / 2.2}
				maxPolarAngle={Math.PI / 2.2}
			/>
			<spotLight
				position={[0, 15, 0]}
				angle={0.3}
				penumbra={1}
				castShadow
				intensity={2}
				shadow-bias={-0.0001}
			/>
			<ambientLight intensity={0.5} />

			<Model />
			<mesh
				receiveShadow
				position-y={-1}
				rotation-x={-Math.PI * 0.5}
				scale={12}>
				<planeGeometry />
				<meshStandardMaterial color='#36454F' />
			</mesh>

			<AccumulativeShadows
				position={[0, -1.3, 0]}
				frames={100}
				alphaTest={0.9}
				scale={30}>
				<RandomizedLight
					amount={8}
					radius={10}
					ambient={0.5}
					position={[1, 5, -1]}
				/>
			</AccumulativeShadows>
			{/* <Environment frames={degraded ? 1 : Infinity}>
				<Lightforms />
			</Environment> */}
		</Canvas>
	);
}

export default App;
