import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
			<App />
		</Canvas>
	</React.StrictMode>
);
