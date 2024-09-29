/** @format */

"use client";

export default function Textarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: any) => void | any;
  placeholder: string;
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out w-full h-64 resize-none"
    ></textarea>
  );
}
