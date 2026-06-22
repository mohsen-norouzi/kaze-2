import { useControls } from "leva";
import { useKazeString } from "../hooks/useKazeString";

const SHOW_CONTROLS = false;

export const TogglePlate = ({ plate }) => {
	const { geometry, material } = useKazeString();

	const { position, stringOffset } = useControls("Toggle Plate", {
		position: {
			value: [0, 0, 0],
			min: -50,
			max: 50,
			step: 0.001,
			render: () => SHOW_CONTROLS,
		},
		stringOffset: {
			value: [-0.45, 1.96, -5.07],
			min: -50,
			max: 50,
			step: 0.001,
			render: () => SHOW_CONTROLS,
		},
	});

	return (
		<group position={position}>
			<mesh
				geometry={plate.geometry}
				castShadow
				receiveShadow
				position={position}
			>
				<meshStandardMaterial color="#e8e2d5" roughness={0.95} metalness={0} />
			</mesh>

			<mesh
				geometry={geometry}
				position={stringOffset}
				material={material}
				scale={0.5}
			>
				<meshStandardMaterial color="#b1b1b1" roughness={0.95} metalness={0} />
			</mesh>
		</group>
	);
};
