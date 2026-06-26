import { PerspectiveCamera } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { KazeModel } from "./components/KazeModel";
import { CAMERA, WINDOW_LIGHT } from "./constants/SceneConstants";

const Experience = () => {
	// SpotLight Helpers
	// const spotLightRef = useRef();
	// const {
	// 	position,
	// 	intensity,
	// 	color,
	// 	angle,
	// 	penumbra,
	// 	shadowRadius,
	// 	shadowMapSize,
	// } = useControls("Window Light", {
	// 	position: { value: WINDOW_LIGHT.position, min: -50, max: 50, step: 0.1 },
	// 	intensity: { value: 300, min: 0, max: 1000, step: 0.1 },
	// 	color: { value: "#fff4e2" },
	// 	angle: { value: 0.78, min: 0, max: 1, step: 0.01 },
	// 	penumbra: { value: 0.45, min: 0, max: 1, step: 0.01 },
	// });

	// useHelper(spotLightRef, SpotLightHelper, "cyan");

	// const { position, rotation } = useControls("Camera", {
	// 	position: { value: CAMERA.position, min: -50, max: 50, step: 0.01 },
	// 	rotation: { value: CAMERA.rotation, min: -50, max: 50, step: 0.01 },
	// });

	return (
		<>
			<Perf position="top-left" />
			{/* <OrbitControls /> */}

			{/* <PerspectiveCamera makeDefault position={[0, 2, 20]} fov={45} /> */}
			<PerspectiveCamera
				makeDefault
				position={CAMERA.position}
				rotation={CAMERA.rotation}
				fov={45}
			/>

			{/* <ambientLight intensity={0.4} /> */}

			<spotLight
				castShadow
				position={WINDOW_LIGHT.position}
				intensity={WINDOW_LIGHT.intensity}
				color={WINDOW_LIGHT.color}
				penumbra={1}
				shadow-radius={WINDOW_LIGHT.shadowRadius}
				shadow-mapSize={WINDOW_LIGHT.shadowMapSize}
				angle={WINDOW_LIGHT.angle}
			/>

			{/* <spotLight
				// ref={spotLightRef}
				castShadow
				position={WINDOW_LIGHT.position}
				intensity={WINDOW_LIGHT.intensity}
				color={WINDOW_LIGHT.color}
				penumbra={1}
				shadow-radius={10}
				shadow-mapSize={[1024, 1024]}
				angle={WINDOW_LIGHT.angle}
			/> */}

			<spotLight
				// ref={spotLightRef}
				castShadow
				position={[9, 19, 22]}
				intensity={400}
				color="#ffffff"
				penumbra={0.45}
				shadow-radius={3}
				shadowapSize={[1024, 1024]}
				angle={0.78}
				shadowMapSize={[1024, 1024]}
			/>
			<KazeModel />
		</>
	);
};

export default Experience;
