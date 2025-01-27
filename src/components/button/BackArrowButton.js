import React from "react";
import { HiArrowSmallLeft } from "react-icons/hi2";
function BackArrowButton({ backFunction = () => {} }) {
  return (
    <button
      className="min-w-10 size-10 rounded-full flex justify-center items-center active:bg-gray-100 hover:bg-gray-100"
      onClick={backFunction}
    >
      <HiArrowSmallLeft className="text-2xl" />
    </button>
  );
}

export default BackArrowButton;
