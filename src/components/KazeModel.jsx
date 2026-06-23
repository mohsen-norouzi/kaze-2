import { useGLTF } from "@react-three/drei";

import { useControls } from "leva";

import { ContactPlate } from "./ContactPlate";
import { MainPlate } from "./MainPlate";
import { ProjectPlate } from "./ProjectPlate";
import { ResumePlate } from "./ResumePlate";
import { TogglePlate } from "./TogglePlate";

useGLTF.preload("/models/kaze.glb");

const SHOW_CONTROLS = false;

export const KazeModel = () => {
	const { nodes } = useGLTF("/kaze.glb");

	const { windowPosition, windowRotation } = useControls("Window", {
		windowPosition: {
			value: [0, 0, -1.3],
			min: -50,
			max: 50,
			step: 0.01,
			render: () => SHOW_CONTROLS,
		},
		windowRotation: {
			value: [0, 0, 0],
			min: -50,
			max: 50,
			step: 0.01,
			render: () => SHOW_CONTROLS,
		},
	});

	return (
		<group rotation={[0, Math.PI / 2, 0]}>
			<mesh geometry={nodes.floor.geometry} receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={1} metalness={0} />
			</mesh>

			<mesh geometry={nodes.wall.geometry} receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={1} metalness={0} />
			</mesh>

			<mesh
				geometry={nodes.window.geometry}
				position={windowPosition}
				rotation={windowRotation}
				receiveShadow
				castShadow
				shadowRadius={10}
				shadowMapSize={[1024, 1024]}
			>
				<meshStandardMaterial color="#e8e2d5" roughness={1} metalness={0} />
			</mesh>

			<MainPlate plate={nodes.plate_main} />

			<ResumePlate plate={nodes.plate_small} />

			<ContactPlate plate={nodes.plate_small} />

			<ProjectPlate plate={nodes.plate_thin} />
			<ProjectPlate plate={nodes.plate_thin} position={[-1.5, -2, -1.3]} />

			<TogglePlate plate={nodes.diamond} />
		</group>
	);
};
