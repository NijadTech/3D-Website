import React from 'react' 
import styled from 'styled-components' 
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei' 
import Model3 from '../components/Secene11'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.bgColor};
`;

const Phone = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: grab;
  bottom: -10%; /* Telefonu %30 aşağı kaydır */
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: var(--fontxl);
  color: black;
  padding: 0.3rem;
`;

const SubTitle = styled.h2`
  font-size: var(--fontmd);
  color: black;
  font-family: var(--fontR);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;
const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;

  border: none;
  outline: none;

  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
const BtnLink = styled.a`
  color: var(--blue);
  text-decoration: none;
  margin-left: 1.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

function PricingSection1() {
  return (
    <Container>
      <Section id="Pric">
        <Phone>
          <Canvas camera={{ fov: 14 }} >
            <ambientLight intensity={4} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model3 scale={[3, 3, 3]} />
            </Suspense>
            <Environment preset='sunset' />
            <OrbitControls enableZoom={true} />
          </Canvas>
        </Phone>
        <Details>
          <SubTitle>MacBook PRO</SubTitle>
          <Title></Title>
          <SubTitle>$2,108*</SubTitle>
          <ButtonContainer>
            <Btn>Buy</Btn>
            <BtnLink href="https://www.apple.com/tr/macbook-pro/?afid=p238%7CsYDCnlF1x-dc_mtid_187079nc38483_pcrid_683476072029_pgrid_28586709046_pntwk_g_pchan__pexid__ptid_kwd-987394769_&cid=aos-tr-kwgo-mac--slid--bran-product-">Daha Fazla Bilgi &#x2192;</BtnLink>
          </ButtonContainer>
        </Details>
      </Section>
    </Container>
  )
}

export default PricingSection1;
