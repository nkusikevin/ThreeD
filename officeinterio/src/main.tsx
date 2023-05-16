import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Canvas
			orthographic
			shadows
			dpr={[1, 2]}
			camera={{ position: [10, 10, 10], zoom: 10 }}>
			<App />
		</Canvas>
	</React.StrictMode>
);
