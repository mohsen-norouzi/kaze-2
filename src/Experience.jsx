import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { KazeModel } from "./components/KazeModel";
import { CAMERA, WINDOW_LIGHT } from "./constants/SceneConstants";

const Experience = () => {
	// SpotLight Helpers
	// const spotLightRef = useRef();
	// const { position, intensity, color, angle } = useControls("Window Light", {
	// 	position: { value: WINDOW_LIGHT.position, min: -50, max: 50, step: 0.1 },
	// 	intensity: { value: WINDOW_LIGHT.intensity, min: 0, max: 1000, step: 0.1 },
	// 	color: { value: WINDOW_LIGHT.color },
	// 	angle: { value: 0.6, min: 0, max: 1, step: 0.01 },
	// });
	// useHelper(spotLightRef, SpotLightHelper, "cyan");

	// const { position, rotation } = useControls("Camera", {
	// 	position: { value: CAMERA.position, min: -50, max: 50, step: 0.01 },
	// 	rotation: { value: CAMERA.rotation, min: -50, max: 50, step: 0.01 },
	// });

	return (
		<>
			<Perf position="top-left" />
			<OrbitControls />

			{/* <PerspectiveCamera makeDefault position={[0, 2, 20]} fov={45} /> */}
			<PerspectiveCamera
				makeDefault
				position={CAMERA.position}
				rotation={CAMERA.rotation}
				fov={45}
			/>

			<ambientLight intensity={0.5} />

			<spotLight
				// ref={spotLightRef}
				castShadow
				position={WINDOW_LIGHT.position}
				intensity={WINDOW_LIGHT.intensity}
				color={WINDOW_LIGHT.color}
				penumbra={1}
				shadow-radius={10}
				shadow-mapSize={[1024, 1024]}
				angle={WINDOW_LIGHT.angle}
			/>
			<KazeModel />
		</>
	);
};

export default Experience;
