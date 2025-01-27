import React from "react";

function Button({
  type = "button",
  name = "button name",
  onclick = () => {},
  disable = false,
  buttonMode = "primary",
  customClass=""
}) {
  if (buttonMode === "secondary") {
    return (
      <button
        className={`w-full border border-accent-600 focus:outline-none font-medium rounded-lg text-lg min-h-12 px-5 py-2.5 text-center bg-gradient-to-r from-accent-800  to-accent-400 bg-clip-text text-transparent ${customClass}`}
        type={type}
        onClick={onclick ? () => onclick() : undefined}
        disabled={disable}
      >
        {name}
      </button>
    );
  }

  return (
    <button
      className={`w-full  focus:outline-none font-medium rounded-lg text-lg min-h-12 px-5 py-2.5 text-center  ${
        disable ? "!bg-gray-100 text-gray-400" : "bg-custom-gradient text-white"
      } ${customClass}`}
      type={type}
      onClick={onclick ? () => onclick() : undefined}
      disabled={disable}
    >
      {name}
    </button>
  );
}

export default Button;
