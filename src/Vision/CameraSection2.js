import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import trailer2 from "../videos/trailer2.mp4";

const Section = styled.section`
  width: 100vw;
  min-height: 115vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;

const FullscreenVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const CameraSection = () => {
    const sectionRef = useRef(null);
    const videoRef1 = useRef(null);
    const titleRef = useRef(null);
  
    let elements = gsap.utils.selector(titleRef);
  
    useLayoutEffect(() => {
      const Elem = sectionRef.current;
      const video1Elem = videoRef1.current;
    })

    return (
        <Section ref={sectionRef}>
          <FullscreenVideo ref={videoRef1} src={trailer2} type="video/mp4" autoPlay muted loop />
        </Section>
      );
    };
    
    export default CameraSection;
