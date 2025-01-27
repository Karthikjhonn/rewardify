import React, { useState } from "react";
import MainLogo from "../../components/log/MainLogo";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import imgurl from "../../asset/svg/No Chat History@3x.svg";

function RegisterStore({ handleScreen }) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <img
        src={imgurl}
        alt="No icon found"
        className="size-[140px] object-contain mx-auto select-none"
      />
      <center className="max-w-xs my-3 space-y-2 mx-auto mt-auto">
        <h1 className="text-3xl font-bold text-black">
          No stores are linked
          <br /> to this account
        </h1>
        <p className="text-base text-black/50 font-medium">
          Enter your account details correctly or
          <br /> register your store with us.
        </p>
      </center>

      <div className="space-y-3 mt-auto">
        <Button
          name={loading ? <Loader /> : "Register your store with us"}
          onclick={() => handleScreen(5)}
        />
        <Button
          name="Login with different account"
          buttonMode="secondary"
          onclick={() => handleScreen(2)}
        />
      </div>
    </>
  );
}

export default RegisterStore;
