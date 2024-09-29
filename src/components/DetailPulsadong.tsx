/** @format */

import React from "react";
import LayoutDescription from "./LayoutDescription";

const DetailPulsadong = () => {
  return (
    <LayoutDescription title="PulsaDong">
      <p>
        This project aims to create a website for ordering credits and
        facilitating various payments. Developed using Next.js with TypeScript
        and integrated with Tailwind CSS, I was responsible for implementing the
        UI design from Figma for the home page, about us, pricing, order
        tracking, and privacy policy sections. I also designed and implemented a
        custom select feature for the product purchase form.
      </p>
      <video width="640" height="360" controls className="m-auto" autoPlay>
        <source src="/videos/pulsadong.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </LayoutDescription>
  );
};

export default DetailPulsadong;
