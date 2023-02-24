import { Canvas } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import Model from "./Model";
import { Effects } from "./Effect";
function App() {
	return (
		<div className='bg'>
			<Canvas>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />

				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<OrbitControls />
				<Center>
					<Model />

					<RoundedBox
						receiveShadow
						castShadow
						smoothness={10}
						radius={0.2}
						rotation-x={-Math.PI / 2}
						position-z={3}
						scale={[8, 10, 0.2]}>
						<meshStandardMaterial
							color='skyblue'
							envMapIntensity={0.5}
							roughness={0}
							metalness={0}
						/>
					</RoundedBox>
				</Center>
				{/* <Effects /> */}
			</Canvas>
		</div>
	);
}

export default App;
