import React from "react";
import { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from '../assets/AppleVision/Scene2';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Glasses() {
  return (
    <Container id="threed">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={5.25} />
        <directionalLight position={[1, 0, 0]} />
        <Suspense fallback={null}>
          <mesh position={[0, 0, 0]}> {/* Centering the mesh */}
            <Model scale={[15, 15, 15]} />
          </mesh>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </Container>
  );
}

export default Glasses;
