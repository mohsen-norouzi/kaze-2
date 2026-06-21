import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

const Experience = () => {
	return (
		<>
			<Perf position="top-left" />
			<OrbitControls />

			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color="red" />
			</mesh>
		</>
	);
};

export default Experience;
