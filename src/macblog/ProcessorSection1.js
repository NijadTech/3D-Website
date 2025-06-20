import React from "react";
import styled, { keyframes } from "styled-components";
import m1_chip from "../assets/Images/m1_ship.jpg";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
  overflow: hidden;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontBig);
  font-family: var(--fontL);
  z-index: 1;

  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
`;

const glow = keyframes`
0%{
    box-shadow: 1px 1px 10px var(--white);
}
50%{
    box-shadow: 2px 2px 25px var(--white);
}
100%{
    box-shadow: 1px 1px 10px var(--white);
}
`;

const Processor = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 3s ease infinite;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  width: 30%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 0.2rem 0;
    padding-left: 2rem;
  }

  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-left: 1rem;
    }

    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
`;

const ProcessorSection1 = () => {
  return (
    <Section id="Proc">
      <Title>Güçlü Performans</Title>
      <Processor>
        <img src={m1_chip} alt="M1 çip" />
      </Processor>
      <Text>
        <span>
          Yaratıcılığınızı Serbest Bırakın: MacBook Pro'nun güçlü M1 çipi ile eşsiz üretkenliğin tadını çıkarın. Videoları düzenliyor, grafikler tasarlıyor veya yazılım kodluyorsanız, MacBook Pro sizi yaratıcı sınırlarınızı zorlamaya teşvik eder.
        </span>
        <span>
          Sorunsuz Entegrasyon, Geliştirilmiş Verimlilik: MacBook Pro'yu iş akışınıza sorunsuz bir şekilde entegre edin ve geliştirilmiş verimlilik dünyasını keşfedin. Sezgisel macOS arayüzü ve sorunsuz ekosistemi ile bu cihaz, çalışma, yaratma ve işbirliği yapma şeklinizi devrim niteliğinde değiştirir.
        </span>
      </Text>
    </Section>
  );
};

export default ProcessorSection1;
