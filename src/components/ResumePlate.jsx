import { useControls } from "leva";
import { useKazeString } from "../hooks/useKazeString";

const SHOW_CONTROLS = false;

export const ResumePlate = ({ plate }) => {
	const { geometry, material } = useKazeString();

	const { position, stringOffset } = useControls("Resume Plate", {
		position: {
			value: [0, 0, 0],
			min: -50,
			max: 50,
			step: 0.01,
			render: () => SHOW_CONTROLS,
		},
		stringOffset: {
			value: [0, 0, 4.2],
			min: -50,
			max: 50,
			step: 0.01,
			render: () => SHOW_CONTROLS,
		},
	});

	return (
		<group position={position}>
			<mesh geometry={plate.geometry} castShadow receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={0.95} metalness={0} />
			</mesh>

			<mesh geometry={geometry} position={stringOffset} material={material}>
				<meshStandardMaterial color="#b1b1b1" roughness={0.95} metalness={0} />
			</mesh>
		</group>
	);
};
