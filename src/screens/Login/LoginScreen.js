import React from "react";
import Button from "../../components/button/Button";
import MainLogo from "../../components/log/MainLogo";

function LoginScreen({ login, contactUs }) {
  return (
    <>
      <MainLogo />
      <center className="max-w-xs my-3 space-y-2 mx-auto">
        <h1 className="text-3xl font-bold text-black">
          Grow your Business <br /> Exponentially!
        </h1>
        <p className="text-base text-black/50 font-medium">
          Pay less on each transaction you <br /> make with our App.
        </p>
        <div className="flex gap-x-1 justify-center items-baseline">
          <span className="size-4 rounded-full bg-black/75 block"></span>{" "}
          <span className="size-[14px] rounded-full border border-black/75 block"></span>
          <span className="size-[14px] rounded-full border border-black/75 block"></span>
        </div>
      </center>
      <div className="space-y-3 mt-auto">
        <Button name="Login" onclick={login} />
        <Button name="Contact Us" buttonMode="secondary" onclick={contactUs} />
      </div>
      <p className="text-center text-sm font-medium text-black/50 mt-auto">
        By clicking, you agree to our{" "}
        <span className="text-black">
          Terms & <br /> Conditions
        </span>{" "}
        and <span className="text-black">Privacy Policy</span>.
      </p>
    </>
  );
}

export default LoginScreen;
