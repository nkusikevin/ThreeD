import { useEffect } from "react";
import {
	RoundedBox,
	ScrollControls,
	Scroll,
	Environment,
	Sparkles,
	Backdrop,
	Float,
	Ring,
} from "@react-three/drei";
//@ts-ignore
import baffle from "baffle";

function App() {
	return (
		<>
			<color attach='background' args={["#333333"]} />
			<ambientLight intensity={0.2} />
			<spotLight
				position={[0, 25, 0]}
				angle={1.3}
				penumbra={1}
				castShadow
				intensity={2}
				shadow-bias={-0.0001}
			/>
			<Environment preset='warehouse' />
		</>
	);
}

export default App;
