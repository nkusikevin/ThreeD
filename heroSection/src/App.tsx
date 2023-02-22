import {
	Center,
	Environment,
	OrbitControls,
	PerspectiveCamera,
	Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Model from "./Model";
import EartModel from "./EartModel";

function App() {
	return (
		<div className='bg'>
			<h1 className='title'>
				To <span style={{ fontSize: "0.4em" }}>the</span>
				<br />
				<span>Moon</span>
			</h1>
			<Canvas>
				<Environment preset='sunset' />
				<ambientLight intensity={0.75} />
				<PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
					<pointLight intensity={1} position={[0, 0, 0]} />
					<spotLight
						castShadow
						intensity={2.25}
						angle={0.2}
						penumbra={1}
						position={[-25, 20, -15]}
						shadow-mapSize={[1024, 1024]}
						shadow-bias={-0.0001}
					/>
				</PerspectiveCamera>
				<Center>
					<Model />
					{/* <EartModel /> */}
				</Center>

				<OrbitControls
					autoRotate
					enablePan={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Stars radius={500} depth={50} count={1000} factor={10} />
			</Canvas>
		</div>
	);
}

export default App;
