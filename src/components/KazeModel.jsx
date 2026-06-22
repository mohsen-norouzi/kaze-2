import { useGLTF } from "@react-three/drei";

import { ContactPlate } from "./ContactPlate";
import { MainPlate } from "./MainPlate";
import { ProjectPlate } from "./ProjectPlate";
import { ResumePlate } from "./ResumePlate";
import { TogglePlate } from "./TogglePlate";

useGLTF.preload("/models/kaze.glb");

export const KazeModel = () => {
	const { nodes } = useGLTF("/kaze.glb");

	return (
		<group rotation={[0, Math.PI / 2, 0]}>
			<mesh geometry={nodes.floor.geometry} receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={1} metalness={0} />
			</mesh>

			{/* this is the same floor, but should be a wall but rotated 180 degrees*/}
			<mesh geometry={nodes.wall.geometry} receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={1} metalness={0} />
			</mesh>

			<MainPlate plate={nodes.plate_main} />

			<ResumePlate plate={nodes.plate_small} />

			<ContactPlate plate={nodes.plate_small} />

			<ProjectPlate plate={nodes.plate_thin} />

			<TogglePlate plate={nodes.diamond} />
		</group>
	);
};
