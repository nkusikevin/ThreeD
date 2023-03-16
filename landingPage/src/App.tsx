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
					<Container style={{ height: "100px", position: "relative" }}>
						<Row
							className='text-center align-items-center justify-content-center'
							style={{
								position: "absolute",
								width: "100%",
								height: "100vh",
								padding: "0px 30px 0px",
							}}>
							<Col xs={6}>
								<div>
									<h1 style={{ marginBottom: "0px" }}>
										Life can be a struggle
									</h1>
								</div>
							</Col>
						</Row>
					</Container>
				</Scroll>
			</ScrollControls>
		</>
	);
}

export default App;
