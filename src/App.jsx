import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./Experience";

function App() {
	return (
		<Canvas camera={{ position: [0, 0, 10] }}>
			<Experience />
		</Canvas>
	);
}

export default App;
