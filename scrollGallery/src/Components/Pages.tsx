import React from "react";
import { useThree } from "@react-three/fiber";
import Page from "./Page";

function Pages() {
	const { width } = useThree((state) => state.viewport);
	return (
		<>
			<Page
				position={[-width * 1, 0, 0]}
				urls={["/trip1.jpg", "/trip2.jpg", "/trip3.jpg"]}
			/>
			<Page
				position={[width * 0, 0, 0]}
				urls={["/img1.jpg", "/img2.jpg", "/img3.jpg"]}
			/>
			<Page
				position={[width * 1, 0, 0]}
				urls={["/img4.jpg", "/img5.jpg", "/img6.jpg"]}
			/>
			<Page
				position={[width * 2, 0, 0]}
				urls={["/trip1.jpg", "/trip2.jpg", "/trip3.jpg"]}
			/>
			<Page
				position={[width * 3, 0, 0]}
				urls={["/img1.jpg", "/img2.jpg", "/img3.jpg"]}
			/>
			<Page
				position={[width * 4, 0, 0]}
				urls={["/img4.jpg", "/img5.jpg", "/img6.jpg"]}
			/>
		</>
	);
}

export default Pages;
