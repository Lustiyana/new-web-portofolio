/** @format */

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import ParallaxSection from "./ParalaxSection";

const WorkExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <ParallaxSection image="/bg-nasa.jpg">
      <div
        className="h-screen rounded-md p-16 opacity-50 flex flex-col gap-8 items-center justify-center text-white"
        data-aos="fade-up"
      >
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
