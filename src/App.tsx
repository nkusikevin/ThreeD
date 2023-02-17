import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Lightforms from "./components/Lightforms";
import Model from "./components/Model";

function App() {
	const [degraded, degrade] = useState(false);
	return (
		<Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
			<OrbitControls makeDefault />
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
			<Environment
				frames={degraded ? 1 : Infinity}
				resolution={256}
				background
				blur={1}>
				<Lightforms />
			</Environment>
		</Canvas>
	);
}

export default App;
