import DesignSection from "./DesignSection";
import DisplaySection from "./DisplaySection";
import HeroSection from "./HeroSection";
import PhoneModel from "./PhoneModel";
import Quote from "./Quote";
import { GlobalStyle } from "../styles/GlobalStyle";
import ProcessorSection from "./ProcessorSection";
import BatterySection from "./BatterySection";
import ColorSection from "./ColorSection";
import CameraSection from "./CameraSection";
import PricingSection from "./PricingSection";
import { ColorContextProvider } from "../context/ColorContext";
import React from 'react'



function App1() {
  return (
    <>
      <GlobalStyle/>
      <Quote/>
      <PhoneModel/> 
       <HeroSection/> 
      <DesignSection/>
      <DisplaySection/>
      <ProcessorSection/> 
      <BatterySection/>
      <ColorContextProvider> 
        <ColorSection />
         <CameraSection />
        <PricingSection /> 
      </ColorContextProvider> 
    </>   
  );
} 

export default App1; 