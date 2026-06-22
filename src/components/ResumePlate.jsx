import { useControls } from "leva";

const SHOW_CONTROLS = false;

export const ResumePlate = ({ plate }) => {
	const { position } = useControls("Resume Plate", {
		position: {
			value: [0, 0, 0],
			min: -50,
			max: 50,
			step: 0.01,
			render: () => SHOW_CONTROLS,
		},
	});

	return (
		<mesh
			geometry={plate.geometry}
			castShadow
			receiveShadow
			position={position}
		>
			<meshStandardMaterial color="#e8e2d5" roughness={0.95} metalness={0} />
		</mesh>
	);
};
