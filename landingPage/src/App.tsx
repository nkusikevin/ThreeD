//@ts-nocheck
import { Scroll, ScrollControls } from "@react-three/drei";
import "./App.css";
//add bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function App() {
	return (
		<>
			<color attach='background' args={["#000"]} />
			<ScrollControls pages={6} damping={0.25}>
				<Scroll></Scroll>

				<Scroll html style={{ width: "100%" }}>
					<Container style={{ position: "relative" }}></Container>
				</Scroll>
			</ScrollControls>
		</>
	);
}

export default App;
