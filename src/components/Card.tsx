/** @format */

import Image from "next/image";
import React from "react";
import { useModal } from "@/context/modalContext";

const Card = ({ item }: { item: any }) => {
  const { handleModalOpen } = useModal();

  return (
    <div className="text-white bg-gray-600 bg-opacity-50 p-2 rounded-md flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-center">{item.projectName}</h3>
      <Image
        src={item.thumbnail}
        alt={item.projectName}
        width={240}
        height={240}
        className="w-full h-48 rounded-md object-cover"
      />
      <button
        onClick={() => handleModalOpen(item.description)}
        className="underline text-blue-500"
      >
        Learn
      </button>
    </div>
  );
};

export default Card;
