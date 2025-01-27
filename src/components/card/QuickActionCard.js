import React from "react";

function QuickActionCard({ name, icon }) {
  return (
    <div>
      <div className="bg-secondary p-2 w-[62px] h-[56px] rounded-lg flex justify-center items-center ">
        {icon}
      </div>
      <p className="font-semibold max-w-[62px] text-center text-xs capitalize mt-1">
        {name}
      </p>
    </div>
  );
}

export default QuickActionCard;
