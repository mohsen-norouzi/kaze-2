import { useGLTF } from "@react-three/drei";

// const STRING_MATERIAL = new THREE.MeshStandardMaterial({
// 	color: "#e8e2d5",
// 	roughness: 0.95,
// });

export const useKazeString = () => {
	const { nodes } = useGLTF("/kaze.glb");

	return { geometry: nodes.string.geometry, material: nodes.string.material };
};
