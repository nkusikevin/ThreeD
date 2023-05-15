import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "./Components/Scroll";
import Pages from "./Components/Pages";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";

function App() {
	return (
		<>
			<Suspense fallback={null}>
				<ScrollControls infinite horizontal damping={4} pages={6} distance={1}>
					<Scroll>
						<Pages />
					</Scroll>
					<Scroll html>
						<h1 style={{ position: "absolute", top: "20vh", left: "-75vw" }}>
							Visit
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "25vw" }}>
							Rwanda
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "125vw" }}>
							Country
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "225vw" }}>
							Of
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "325vw" }}>
							A Thousand
						</h1>
						<h1 style={{ position: "absolute", top: "20vh", left: "425vw" }}>
							Hills
						</h1>
					</Scroll>
				</ScrollControls>
				<Preload />
			</Suspense>
		</>
	);
}

export default App;
