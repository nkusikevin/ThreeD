import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import logo from "./assets/logo-2.png";
import { Canvas } from "@react-three/fiber";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<header className='App-header'>
			<img src={logo} className='App-logo' alt='logo' />
		</header>
		<Canvas shadows>
			<App />
		</Canvas>

		<button className='btn--sound'>
			<span className='material-symbols-rounded'>music_note</span>
		</button>
	</React.StrictMode>
);
