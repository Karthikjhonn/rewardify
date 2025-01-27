import React from "react";

function SettlementsCard({ data }) {
  return (
    <div className="flex gap-x-4 border-b border-gray-300 pt-3 pb-4">
      <div className="size-11 min-w-11 rounded-full bg-secondary flex justify-center items-center">
        <img
          src={require("../../asset/image/logo.png")}
          className="object-contain size-6 aspect-square"
        />
      </div>
      <div>
        <p className=" font-medium ">Weekly Settlements(10 Apr - 17 Apr) </p>
        <p className=" text-[10px] lg:text-xs text-black/75">
          Paid on Apr 11, 2024 at 4:30PM
        </p>
        <p className="line-clamp-1 text-[10px] lg:text-xs font-medium bg-secondary px-1 py-0.5 rounded inline-block lg:mt-0.5">
          REWARDIFY(weekly Settlement)
        </p>
        <p className="line-clamp-1 text-[10px] lg:text-xs text-black/50">
          2week ago
        </p>
      </div>
      <div className="ms-auto font-medium text-sm space-y-1 text-end">
        <p className="text-red-500  whitespace-nowrap capitalize">-₹3326.00</p>
        <p className="text-emerald-500  whitespace-nowrap capitalize">Paid</p>
        <p className="text-red-500  underline whitespace-nowrap capitalize">
          view
        </p>
      </div>
    </div>
  );
}

export default SettlementsCard;
