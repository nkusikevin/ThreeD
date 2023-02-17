import { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";

function Model() {
	const { scene, nodes, materials }: any = useGLTF("./audipro.glb");
	console.log(materials);

	useLayoutEffect(() => {
		Object.values(nodes).forEach(
			(node: any) =>
				node.isMesh && (node.receiveShadow = node.castShadow = true)
		);
		applyProps(materials.glass_window, {
			color: "black",
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
	}, [nodes, materials]);

	return (
		<primitive
			object={scene}
			scale={0.006}
			position={[1, -6, -3]}
			rotation={[0, Math.PI / 3, 0]}
		/>
	);
}

export default Model;

// applyProps(materials.coat, {
// 	envMapIntensity: 4,
// 	roughness: 0.5,
// 	metalness: 1,
// });
