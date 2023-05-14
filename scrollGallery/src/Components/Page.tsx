import React from "react";
import { useThree } from "@react-three/fiber";
import Image from "./Image";

function Page({ m = 0.4, urls, ...props }: any) {
	const { width } = useThree((state) => state.viewport);
	const w = width < 10 ? 1.5 / 3 : 1 / 3;
	return (
		<group {...props}>
			<Image
				position={[-width * w, 0, -1]}
				scale={[width * w - m * 2, 5, 1]}
				url={urls[0]}
			/>
			<Image
				position={[0, 0, 0]}
				scale={[width * w - m * 2, 5, 1]}
				url={urls[1]}
			/>
			<Image
				position={[width * w, 0, 1]}
				scale={[width * w - m * 2, 5, 1]}
				url={urls[2]}
			/>
		</group>
	);
}

export default Page;
