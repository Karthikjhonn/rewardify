import React from "react";
import { HiOutlineUser } from "react-icons/hi";

function TransactionCard({data}) {
  return (
    <div className="flex gap-x-4 border-b border-gray-300 pt-3 pb-4">
      <div className="size-11 min-w-11 rounded-full bg-secondary flex justify-center items-center">
        <HiOutlineUser className="text-2xl inline-block" />
      </div>
      <div>
        <p className="font-medium">+918956598562 Send a Payment</p>
        <p className="text-[10px] lg:text-xs text-black/75">Paid on Apr 11, 2024 at 4:30PM</p>
        <p className="text-[10px] lg:text-xs font-medium bg-secondary px-1 py-0.5 rounded inline-block lg:mt-0.5">Paid via QR Scan</p>
        <p className="text-[10px] lg:text-xs text-black/50">2hr ago</p>
      </div>
      <div className="ms-auto text-sm  text-end">
        <p className="text-emerald-500 font-medium whitespace-nowrap">+₹500.00</p>
      </div>
    </div>
  );
}

export default TransactionCard;
