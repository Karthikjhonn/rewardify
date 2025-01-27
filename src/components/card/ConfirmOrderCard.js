import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import Button from "../button/Button"
function ConfirmOrderCard({data}) {
  return (
    <section className="border border-gray-300 rounded-lg px-3 py-5 text-sm">
      <div className="text-sm font-normal flex items-center mb-5">
        <p className="line-clamp-1 text-accent-600">Order Id: 12345</p>
        <p className="line-clamp-1 ms-auto">Date: Apr 10, 2024</p>
      </div>
      <div className="space-y-2">
        <p className="font-semibold">order for:</p>
        <p>karthick v</p>
        <div className="flex divide-x gap-x-2">
          <div className="flex gap-x-2 items-center">
            <div className="bg-secondary size-6 min-w-6 rounded-full flex justify-center items-center">
              <MdOutlineCall />
            </div>
            <p className="line-clamp-1 text-xs">+918596585696</p>
          </div>
          <div className="flex gap-x-2 items-center ps-2">
            <div className="bg-secondary size-6 min-w-6 rounded-full flex justify-center items-center">
              <IoLocationOutline />
            </div>
            <p className="line-clamp-1 text-xs">Mount road, chennai</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="font-semibold mb-3">order items:</p>
        <div className="flex items-center justify-between mb-3">
            <p className="line-clamp-1">1 x Ooty apple</p>
            <p className="font-semibold">₹100.00</p>
        </div>
        <div className="flex items-center justify-between">
            <p className="line-clamp-1">5 x White Egg</p>
            <p className="font-semibold">₹50.00</p>
        </div>
        <hr className="h-0.5 bg-gray-200 my-4" />
        <div className="flex items-center justify-between font-semibold mb-1">
            <p className="line-clamp-1 capitalize">Total bill amount</p>
            <p className="line-clamp-1">₹150.00</p>
        </div>
        <span className="bg-secondary px-1 py-0.5 font-semibold">Paid UPI</span>
      </div>
      <div className="space-y-3 mt-7 lg:grid lg:grid-cols-2 lg:gap-x-5 lg:space-y-0">
        <Button name="Confirm Order" />
        <Button name="Reject Order" buttonMode="secondary"  customClass="order-first" />
      </div>
    </section>
  );
}

export default ConfirmOrderCard;
