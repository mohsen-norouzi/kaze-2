import { useGLTF } from "@react-three/drei";

useGLTF.preload("/models/kaze.glb");

export const KazeModel = () => {
	const { nodes } = useGLTF("/kaze.glb");

	console.log(nodes);

	return (
		<group rotation={[0, Math.PI / 2, 0]}>
			<mesh geometry={nodes.wall.geometry} receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={1} metalness={0} />
			</mesh>

			<mesh geometry={nodes.floor.geometry} receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={1} metalness={0} />
			</mesh>

			<mesh geometry={nodes.plate_main.geometry} castShadow receiveShadow>
				<meshStandardMaterial color="#e8e2d5" roughness={0.95} metalness={0} />
			</mesh>
		</group>
	);
};
