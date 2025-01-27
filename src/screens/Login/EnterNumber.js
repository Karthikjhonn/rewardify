import React, { useState } from "react";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import MainLogo from "../../components/log/MainLogo";

function EnterNumber({ handleScreen }) {
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

  const validateInput = (value) => {
    return value.trim() !== "" && value.trim().length >= 6;
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    setIsValid(validateInput(value));
  };

  const sendOTP = () => {
    console.log(mobileNumber);

    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
        handleScreen(3);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainLogo />
      <center className="max-w-xs my-3 space-y-2 mx-auto">
        <h1 className="text-3xl font-bold text-black">
          Get started with
          <br /> REWARDIFY
        </h1>
        <p className="text-base text-black/50 font-medium">
          Enter your mobile number or
          <br /> Shop ID to get started.
        </p>
      </center>
      <div>
        <input
          className="px-3 py-2 min-h-10 rounded-lg border border-gray-300 w-full"
          placeholder="Enter Shop ID / Mobile Number"
          value={mobileNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className=" mt-auto">
        <Button
          name={loading ? <Loader /> : "send OTP"}
          onclick={sendOTP}
          disable={!isValid || loading}
        />
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

export default EnterNumber;
