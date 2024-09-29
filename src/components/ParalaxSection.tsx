/** @format */

"use client";
import { ReactNode } from "react";

export default function ParallaxSection({
  children,
  image,
}: {
  children: ReactNode;
  image: string;
}) {
  return (
    <div
      id="parallax-section"
      className={`mx-auto w-full bg-cover bg-fixed bg-center min-h-screen bg-no-repeat shadow-lg`}
      style={{
        backgroundImage: `url('${image}')`,
        height: "100vh",
      }}
    >
      <div className="p-16 w-full">{children}</div>
    </div>
  );
}
