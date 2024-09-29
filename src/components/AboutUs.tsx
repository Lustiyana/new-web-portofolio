/** @format */

import React from "react";
import ThreeScene from "./ThreeScene";

const AboutUs = () => {
  return (
    <section>
      {/* <div>
        <ul className="flex bg-black text-white gap-4 justify-end">
          <li>About</li>
          <li>Education</li>
          <li>Working Experience</li>
          <li>Projects</li>
        </ul>
      </div> */}
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
            <h1 className="text-white text-4xl font-bold text-end absolute">
              A graduated from Informatics Engineering with with experience as
              Full Stack Developer with extensive experience in the building web
              application both of frontend (React.js, Next.js) and backend
              (Node.js with Express, create API using Next.js, and PHP using
              Codeigniter), I excel in designing and implementing robust,
              scalable web applications from concept to deployment. I also have
              knowledge about another language programing, such as Python and
              Golang.
            </h1>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
