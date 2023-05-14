import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import Pages from "./Components/Pages";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";

function App() {
	return (
		<>
			<Suspense fallback={null}>
				<ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
					<Scroll>
						<Pages />
					</Scroll>
					<Scroll html>
						<h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}>
							home
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "25vw" }}>
							to
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}>
							be
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}>
							home
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}>
							to
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}>
							be
						</h1>
					</Scroll>
				</ScrollControls>
				<Preload />
			</Suspense>
		</>
	);
}

export default App;
