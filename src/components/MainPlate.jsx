import { Text } from "@react-three/drei";
import { useControls } from "leva";
import { useKazeString } from "../hooks/useKazeString";

const SHOW_CONTROLS = true;

export const MainPlate = ({ plate }) => {
	const { geometry, material } = useKazeString();

	const { position, stringOffset, titleOffset, subTitleOffset } = useControls(
		"Main Plate",
		{
			position: {
				value: [-0.32, 0, 0],
				min: -50,
				max: 50,
				step: 0.01,
				render: () => SHOW_CONTROLS,
			},
			stringOffset: {
				value: [0, 0, 0],
				min: -50,
				max: 50,
				step: 0.01,
				render: () => SHOW_CONTROLS,
			},
			titleOffset: {
				value: [-0.16, 4.2, 0],
				min: -50,
				max: 50,
				step: 0.01,
				render: () => SHOW_CONTROLS,
			},
			subTitleOffset: {
				value: [-0.16, 4.65, 0],
				min: -50,
				max: 50,
				step: 0.01,
				render: () => SHOW_CONTROLS,
			},
		},
	);

	return (
		<group position={position}>
			<mesh geometry={plate.geometry} castShadow receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={0.95} metalness={0} />
			</mesh>

			<mesh geometry={geometry} position={stringOffset} material={material}>
				<meshStandardMaterial color="#b1b1b1" roughness={0.95} metalness={0} />
			</mesh>

			<Text
				position={titleOffset}
				rotation={[0, Math.PI / -2, 0]}
				fontSize={0.5}
				color="#2e2e2e"
				font="/fonts/Audrey-Normal.otf"
			>
				MOHSEN
			</Text>

			<Text
				position={subTitleOffset}
				rotation={[0, Math.PI / -2, 0]}
				fontSize={0.17}
				color="#2e2e2e"
				font="/fonts/Muli.ttf"
			>
				Web Designer & Developer
			</Text>
		</group>
	);
};
