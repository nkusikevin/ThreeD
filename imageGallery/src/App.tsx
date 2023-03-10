import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
			<color attach='background' args={["#191920"]} />
			<fog attach='fog' args={["#191920", 0, 15]} />
			<group position={[0, -0.5, 0]}>
				<mesh rotation={[-Math.PI / 2, 0, 0]}>
					<planeGeometry args={[50, 50]} />
					<MeshReflectorMaterial
						blur={[300, 100]}
						resolution={2048}
						mixBlur={1}
						mixStrength={50}
						roughness={1}
						depthScale={1.2}
						minDepthThreshold={0.4}
						maxDepthThreshold={1.4}
						color='#050505'
						metalness={0.5}
						mirror={0.5}
					/>
				</mesh>
			</group>
			<Environment preset='sunset' />
		</Canvas>
	);
}

export default App;
