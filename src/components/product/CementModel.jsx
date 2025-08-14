import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/*
  Lightweight built-in 3D "cement bag" representation.
  This renders a slightly flattened box and rotates it — no external assets required.
*/

function BagMesh(props) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <mesh ref={ref} scale={[1.4, 1.1, 0.6]} {...props}>
      <boxGeometry args={[1, 1, 0.6]} />
      <meshStandardMaterial color={"#d7c7b8"} metalness={0.1} roughness={0.8} />
    </mesh>
  );
}

export default function CementModel() {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <BagMesh />
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
}
