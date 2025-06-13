import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from '@react-three/drei';
import Model from '../assets/AppleVision/Scene2'; 

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Phonemodel2 = () => {
  return (
    <Container id="Phone-model">
      <Canvas camera={{ fov: 14 }} >
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>  
          <Model scale={[3, 3, 3]} />
        </Suspense> 
        <Environment preset='sunset'/>
        {/* Uncomment the line below to enable OrbitControls */}
        {/* <OrbitControls /> */}
      </Canvas>
    </Container>
  );
};

export default Phonemodel2;
