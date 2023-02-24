import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
	Center,
	Environment,
	OrbitControls,
	RoundedBox,
	Stage,
	MeshReflectorMaterial,
	PresentationControls,
} from "@react-three/drei";

import Model from "./Model";
import { useControls } from "leva";
function App() {
	const { color } = useControls({ color: "#b78135" });
	return (
		<div className='bg'>
			<Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
				<Stage
					intensity={1.5}
					environment='city'
					shadows={{
						type: "accumulative",
						color: "black",
						colorBlend: 2,
						opacity: 2,
					}}
					adjustCamera={0.9}>
					<Model color={color} />
				</Stage>
				<OrbitControls
					autoRotate
					makeDefault
					minPolarAngle={Math.PI / 2}
					maxPolarAngle={Math.PI / 2}
				/>
			</Canvas>
		</div>
	);
}

export default App;
