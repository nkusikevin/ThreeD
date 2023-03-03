import React from "react";
import { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Model() {
	const { scene, nodes, materials }: any = useGLTF("/eth_coin.glb");

	useLayoutEffect(() => {
		Object.values(nodes).forEach(
			(node: any) =>
				node.isMesh && (node.receiveShadow = node.castShadow = true)
		);
		applyProps(materials["Material.001"], {
			envMapIntensity: 2,
			roughness: 0.9,
			metalness: 1,
			color: "#555",
		});
	}, [nodes, materials]);

	//add rotation  animation

	useFrame((state, delta) => {
		scene.rotation.y += delta;
	});

	return (
		<primitive
			object={scene}
			dispose={null}
			scale={1.4}
			position={[0, -1.5, 0]}
		/>
	);
}

export default Model;
