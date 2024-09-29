/** @format */

import React from "react";
import ParallaxSection from "./ParalaxSection";
import Image from "next/image";

const CuriculumVitae = () => {
  return (
    <ParallaxSection image="/bg-workspace.jpg">
      <div className="h-screen flex flex-col gap-8 items-center justify-center">
        <div className="flex items-center">
          <p className="text-lg">Find Another Project on</p>
          <a href="">
            <Image
              src="/images/github.png"
              alt="/images/github.png"
              width={48}
              height={48}
            />
          </a>
        </div>
        <button className="bg-slate-600 text-white px-8 py-4 rounded-full">
          Download Curiculum Vitae
        </button>
      </div>
    </ParallaxSection>
  );
};

export default CuriculumVitae;
