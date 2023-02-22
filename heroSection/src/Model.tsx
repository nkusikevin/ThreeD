import React from "react";
import { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";

function Model() {
	const { scene, nodes, materials }: any = useGLTF("/rocket_orbiting_moon.glb");
	console.log(materials);
	useLayoutEffect(() => {
		Object.values(nodes).forEach(
			(node: any) =>
				node.isMesh && (node.receiveShadow = node.castShadow = true)
		);

		applyProps(materials.Raket, {
			color: "#474747",
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
		});
		applyProps(materials.Ring, {
			color: "black",
			envMapIntensity: 2,
			roughness: 0.2,
			stone: 0.8,
		});
		// applyProps(materials.Subdivision_Surface[1], {
		// 	color: "#474747",
		// 	envMapIntensity: 2,
		// 	roughness: 0.45,
		// 	metalness: 0.8,
		// });
	}, [nodes, materials]);
	return (
		<>
			<primitive object={scene} scale={0.06} position={[-2, 0, 0]} />
		</>
	);
}

export default Model;
