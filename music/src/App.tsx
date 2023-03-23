import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";

import {
	Center,
	Environment,
	OrbitControls,
	PerspectiveCamera,
	Stars,
} from "@react-three/drei";
import Mode from "./components/Mode";

function App() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<OrbitControls
				autoRotate
				enablePan={false}
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
			/>
			<Center>
				<Mode />
			</Center>
			<Environment preset='city' />
		</Canvas>
	);
}

export default App;
