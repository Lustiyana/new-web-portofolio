/** @format */

import React from "react";
import LayoutDescription from "./LayoutDescription";

const DetailFlexboxPlayground = () => {
  return (
    <LayoutDescription title="Flexbox Playground">
      <p>
        Flexbox Playground is an interactive space for experimenting with CSS
        Flexbox layouts. Whether you’re a beginner looking to grasp the basics
        or an experienced developer aiming to refine your skills, this platform
        allows you to easily add and customize flexbox items. You can modify
        properties like flex-direction, justify-content, and align-items in real
        time, with changes instantly reflected in a responsive design. The live
        code generation feature provides the corresponding CSS code, making it
        easy to copy and paste into your projects. With an intuitive interface,
        Flexbox Playground helps you explore the potential of modern web design
        and create stunning layouts effortlessly.
      </p>
      <div>
        <p>Project Link</p>
        <a
          href="https://flexbox-playground-4oitrufet-uti-tech.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          https://flexbox-playground-4oitrufet-uti-tech.vercel.app/
        </a>
      </div>
      <div>
        <p>Github Link</p>
        <a
          href="https://github.com/Lustiyana/flexbox-playground-vite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          https://github.com/Lustiyana/flexbox-playground-vite
        </a>
      </div>
    </LayoutDescription>
  );
};

export default DetailFlexboxPlayground;
