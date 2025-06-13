import React from "react";
import HeroSection1 from "../macblog/HeroSection1";
import Phonemodel from "../macblog/Phonemodel";
import Quote1 from "../macblog/Quote1";
import { GlobalStyle1 } from "../styles/GlobalStyle1";
import DesignSection1 from "../macblog/DesignSection1";
import DisplaySection1 from "../macblog/DisplaySection1";
import ProcessorSection1 from "../macblog/ProcessorSection1";
import BatterySection from "../macblog/BatterySection";
import CameraSection1 from "../macblog/CameraSection1";
import PricingSection1 from "../macblog/PricingSection1";



function Blog() {
  return (
    <>
    <GlobalStyle1 />
    <Quote1 />
    <Phonemodel />
    <HeroSection1 /> 
    <DesignSection1 />
    <DisplaySection1/> 
    <ProcessorSection1/>
    <BatterySection/>
    <CameraSection1/>
    <PricingSection1 /> 

    </>
  ) ; 
}

export default Blog;
