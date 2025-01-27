import React from "react";

function MainLogo() {
  return (
    <>
      <img
        src={require("../../asset/image/logo.png")}
        alt="Logo"
        className="object-contain aspect-square mx-auto max-w-[70px] max-h-[70px]"
      />
    </>
  );
}

export default MainLogo;
