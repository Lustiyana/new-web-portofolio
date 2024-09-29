/** @format */
"use client";

import { useState } from "react";

export default function Textarea() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder="Enter your text"
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out w-full h-64 resize-none"
    ></textarea>
  );
}
