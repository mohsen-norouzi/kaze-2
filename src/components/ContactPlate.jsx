import { useControls } from "leva";
import { useKazeString } from "../hooks/useKazeString";

const SHOW_CONTROLS = true;

export const ContactPlate = ({ plate }) => {
	const { geometry, material } = useKazeString();

	const { position } = useControls("Contact Plate", {
		position: {
			value: [-3, -4, -7],
			min: -50,
			max: 50,
			step: 0.01,
			render: () => SHOW_CONTROLS,
		},
	});

	return (
		<>
			<mesh
				geometry={plate.geometry}
				castShadow
				receiveShadow
				position={position}
			>
				<meshStandardMaterial color="#e8e2d5" roughness={0.95} metalness={0} />
			</mesh>

			<mesh geometry={geometry} position={position} material={material}>
				<meshStandardMaterial color="#b1b1b1" roughness={0.95} metalness={0} />
			</mesh>
		</>
	);
};
