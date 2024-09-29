/** @format */

"use client";

export default function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: any) => void | any;
  placeholder: string;
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out w-full"
    />
  );
}
