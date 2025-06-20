/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import trailer1 from "../videos/trailer1.mp4";

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

// // const TitleContainer = styled.div`
// //   width: 50%;
// //   height: 100%;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   position: absolute;
// //   top: 0;
// //   right: 0;
// //   z-index: 1;

// //   & > *:nth-child(2) {
// //     margin-left: 6rem;
// //   }
// //   & > *:nth-child(3) {
// //     margin-left: 12rem;
// //   }

// //   @media screen and (max-width: 48em) {
// //     top: 60%;
// //     right: 2rem;
// //   }
// //   @media screen and (max-width: 40em) {
// //     right: 5rem;
// //   }
// //   @media screen and (max-width: 30em) {
// //     top: 70%;
// //     right: 40%;
// //   }
// // `;

// // const Title = styled.h1`
// //   font-size: var(--fontBig);
// //   z-index: 5;
// //   text-transform: capitalize;

// //   @media screen and (max-width: 70em) {
// //     font-size: var(--fontxxxl);
// //   }
// //   @media screen and (max-width: 48em) {
// //     font-size: var(--fontxxl);
// //   }
// `;

const CameraSection = () => {
  const sectionRef = useRef(null);
  const videoRef1 = useRef(null);
  // const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    // const video2Elem = videoRef2.current;

    // pin the section
    // gsap.to(Elem, {
    //   scrollTrigger: {
    //     trigger: Elem,
    //     start: "top top",
    //     end: `bottom+=500 bottom`,
    //     scrub: 1,
    //     pin: true,
    //     pinSpacing: true,
    //   },
    // });

    // let t2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: Elem,
    //     start: "top top",
    //     end: `bottom+=500 bottom`,
    //     scrub: 1,
    //   },
    })
    // .to(video1Elem, { scale: 0.3 }, "key1")
    // .to(video2Elem, { scale: 0.6 }, "key1");

    // elements("h1").forEach((el) => {
    //   t2.fromTo(
    //     el,
    //     {
    //       scrollTrigger: {
    //         trigger: el,
    //         start: "top top",
    //         end: `bottom bottom`,
    //         scrub: 1,
    //         // markers: true,
    //       },
    //       x: 100,
    //       opacity: 0,
    //     },
    //     {
    //       x: 0,
    //       opacity: 1,
    //     }
    //   );
    // });

  //   return () => {
  //     if (t2) t2.kill();
  //   };
  // }, []);

  return (
    <Section ref={sectionRef}>
      <FullscreenVideo ref={videoRef1} src={trailer1} type="video/mp4" autoPlay muted loop />
      {/* <V2 ref={videoRef2} src={v2} type="video/mp4" autoPlay muted loop /> */}
      {/* <TitleContainer ref={titleRef}>
        <Title>Ready.</Title>
        <Title>Steady.</Title>
        <Title>Action.</Title>
      </TitleContainer> */}
    </Section>
  );
};

export default CameraSection;
