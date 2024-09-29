/** @format */

import React from "react";
import ThreeScene from "./ThreeScene";

const AboutUs = () => {
  return (
    <section>
      <div>
        <ul className="flex bg-black text-white gap-4 justify-end">
          <li>About</li>
          <li>Education</li>
          <li>Working Experience</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="bg-black">
        <ThreeScene />
        <div className="absolute flex items-center top-0">
          <div className="text-white font-extrabold lg:text-[240px] md:text-[120px] text-5xl">
            <h1>Fullstack</h1>
            <h1>Developer</h1>
          </div>
        </div>
        <section className="min-h-screen bg-black flex flex-col justify-center">
          <div>
            <h1 className="text-white text-[64px] font-bold text-end absolute">
              A graduate from informatics engineering who have jgdagf auigf
              sjgdj ahdaj hsakh fhajh sakjs akxk ahdka gfjshd kajk
            </h1>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
