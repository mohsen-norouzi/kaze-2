import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { KazeModel } from "./components/KazeModel";

const Experience = () => {
	return (
		<>
			<Perf position="top-left" />
			<OrbitControls />

			<PerspectiveCamera makeDefault position={[0, 2, 20]} fov={45} />

			<ambientLight intensity={0.4} />
			<directionalLight
				position={[5, 1, 2.6]}
				intensity={2}
				color="#FFF5E0"
				castShadow
			/>

			<KazeModel />
		</>
	);
};

export default Experience;
