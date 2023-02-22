import { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import * as THREE from "three";

function Model() {
	const { scene, nodes, materials }: any = useGLTF("./audipro.glb");
	console.log(materials);

	useLayoutEffect(() => {
		Object.values(nodes).forEach(
			(node: any) =>
				node.isMesh && (node.receiveShadow = node.castShadow = true)
		);
		applyProps(materials.glass_window, {
			color: "white",
			roughness: 0,
			clearcoat: 0.1,
		});
		applyProps(materials.body_color, {
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
			color: "#555",
		});
		applyProps(materials.rims_1, {
			color: "#474747",
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
		});
		applyProps(materials.chrome, {
			color: "white",
			envMapIntensity: 2,
			roughness: 0,
			clearcoat: 0.1,
		});
		applyProps(materials.light, {
			color: "white",
			envMapIntensity: 2,
			roughness: 0,
			clearcoat: 0.1,
		});
		applyProps(materials.Aluminium_1, {
			color: "white",
			envMapIntensity: 2,
			roughness: 0,
			clearcoat: 0.1,
		});
		applyProps(materials.glass_projector, {
			color: "white",
			envMapIntensity: 2,
			roughness: 0,
			clearcoat: 0.1,
		});

		applyProps(materials.black_gloss, {
			color: "#555",
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
		});
		applyProps(materials.trim, {
			color: "#666",
			envMapIntensity: 2,
			roughness: 0.45,
			metalness: 0.8,
		});
	}, [nodes, materials]);
	return (
		<primitive
			object={scene}
			scale={0.002}
			position={[3, -1, 5]}
			rotation={[0, Math.PI / 3, 0]}
		/>
	);
}

export default Model;
