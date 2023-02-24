import { Canvas } from "@react-three/fiber";
import {
	Center,
	Environment,
	useGLTF,
	OrbitControls,
	RoundedBox,
	Stage,
} from "@react-three/drei";

import Model from "./Model";
import { Effects } from "./Effect";
function App() {
	return (
		<div className='bg'>
			<Canvas>
				<Environment preset='night' />
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />

				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<OrbitControls
					autoRotate
					enablePan={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Center>
					<Stage
						environment={"night"}
						intensity={1}
						// contactShadow={false}
						// shadowBias={-0.0015}
					>
						<Model />
					</Stage>

					{/* <RoundedBox
						receiveShadow
						castShadow
						smoothness={10}
						radius={0.2}
						rotation-x={-Math.PI / 2}
						position-z={3}
						scale={[6, 6, 0.2]}>
						<meshStandardMaterial
							color='rgb(35, 36, 39) 99%'
							envMapIntensity={0.5}
							roughness={0}
							metalness={0}
						/>
					</RoundedBox> */}
				</Center>
				{/* <Effects /> */}
			</Canvas>
		</div>
	);
}

export default App;
