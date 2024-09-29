/** @format */

import React, { ReactNode } from "react";

const LayoutDescription = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="">
      <div className="sm:w-1/2 m-auto py-12 max-sm:px-8">
        <h1 className="text-4xl font-bold mb-8 leading-16">{title}</h1>
        <div className="flex flex-col gap-4">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDescription;
