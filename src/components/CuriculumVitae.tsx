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
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/github.png"
              alt="GitHub Logo"
              width={48}
              height={48}
            />
          </a>
        </div>
        <a href="/Lustiyana-CV.pdf" download>
          <button className="bg-slate-600 text-white px-8 py-4 rounded-full">
            Download Curriculum Vitae
          </button>
        </a>
      </div>
    </ParallaxSection>
  );
};

export default CuriculumVitae;
