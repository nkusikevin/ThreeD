import React from "react";
import { useGLTF } from "@react-three/drei";

function eartModel() {
	const gltf = useGLTF("/themoon.glb");
	return (
		<>
			<primitive object={gltf.scene} scale={0.4} position={[0, 3, 8]} />
		</>
	);
}

export default eartModel;
