/** @format */

import { useModal } from "@/context/modalContext";
import React, { ReactNode } from "react";

const Modal = () => {
  const { isModalOpen, setIsModalOpen, modalContent } = useModal();
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 h-screen">
      <div className="bg-white rounded-md w-11/12 overflow-auto p-4">
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-red-500 float-right"
        >
          Close
        </button>
        <div className="mt-4 max-h-[560px]">{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
