import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Mode from "./components/Mode";

function App() {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Mode />
		</Canvas>
	);
}

export default App;
