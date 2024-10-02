/** @format */

import React from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import ParallaxSection from "./ParalaxSection";

const WorkExperience = () => {
  return (
    <ParallaxSection image="/bg-nasa.jpg">
      <div className="h-screen rounded-md p-16 flex flex-col gap-8 items-center justify-center text-white">
        <h1 className="text-4xl text-center font-bold">Work Experience</h1>
        <div>
          <p>Fulltime Contract (Nov 2023 - Present)</p>
          <Image
            src="/images/logo-sau.png"
            alt="/images/logo-sau.png"
            width={240}
            height={240}
          />
        </div>
      </div>
    </ParallaxSection>
  );
};

export default WorkExperience;
