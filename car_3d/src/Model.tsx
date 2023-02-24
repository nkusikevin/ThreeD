import React from "react";
import { Center, useGLTF } from "@react-three/drei";

function Model() {
	const { materials, node, scene }: any = useGLTF("/jeep.glb");
	console.log(materials);

	return <primitive object={scene} scale={1} position={[0, -0.2, 3]} />;
}

export default Model;
