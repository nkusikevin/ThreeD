import React from "react";
import { useGLTF } from "@react-three/drei";

function Mode() {
	const model = useGLTF("/headphones.glb");
	return (
		<>
			<primitive object={model.scene} scale={0.1} />
		</>
	);
}

export default Mode;
