import React from "react";
import { useLayoutEffect } from "react";
import { Center, useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import * as THREE from "three";

function Model() {
	const { materials, nodes, scene }: any = useGLTF("/jeep.glb");

	useLayoutEffect(() => {
		Object.values(nodes).forEach(
			(node: any) =>
				node.isMesh && (node.receiveShadow = node.castShadow = true)
		);
		applyProps(materials.Glass, {
			color: "white",
			roughness: 0,
			clearcoat: 0.1,
		});
		applyProps(materials.Main_Paint, {
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
			color: "#888",
		});
		applyProps(materials.Rims, {
			color: "#474747",
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
		});
		applyProps(materials.Chrome, {
			color: "white",
			envMapIntensity: 2,
			roughness: 0,
			clearcoat: 0.1,
		});
		applyProps(materials.Indicators, {
			color: "red",
			envMapIntensity: 2,
			roughness: 0,
			clearcoat: 0.1,
		});
		applyProps(materials.Tyres, {
			color: "black",
			envMapIntensity: 2,
			roughness: 0,
			clearcoat: 0.1,
		});
		applyProps(materials.Mirrors, {
			color: "white",
			roughness: 0,
			clearcoat: 0.1,
		});

		applyProps(materials.material_0, {
			color: "red",
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
		});
		applyProps(materials.Suspension, {
			color: "red",
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
		});
	}, [nodes, materials]);
	return <primitive object={scene} scale={1} position={[0, -0.17, 3]} />;
}

export default Model;
