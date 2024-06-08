import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "../_context/ThreeContext";

const PaintArea: React.FC = () => {
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    const animateCube = () => {
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.01;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      animateCube();
    };

    animate();

    return () => {
      scene.remove(cube);
    };
  }, [scene]);

  return null;
};

export default PaintArea;
