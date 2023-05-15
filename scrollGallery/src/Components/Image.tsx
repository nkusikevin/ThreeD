import React, { useRef } from "react";
import { Image as ImageImpl } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "../Components/Scroll";

function Image(props: any) {
	const ref = useRef<any>();
	const group = useRef<any>();
	const data = useScroll();
	useFrame((state, delta) => {
		group.current.position.z = THREE.MathUtils.damp(
			group.current.position.z,
			Math.max(0, data.delta * 50),
			4,
			delta
		);
		ref.current.material.grayscale = THREE.MathUtils.damp(
			ref.current.material.grayscale,
			Math.max(0, 1 - data.delta * 1000),
			4,
			delta
		);
	});
	return (
		<group ref={group}>
			<ImageImpl ref={ref} {...props} />
		</group>
	);
}

export default Image;
