import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import Timer from "../../components/timer/Timer";
import VerifyOtpTimer from "../../components/timer/Timer";
import MainLogo from "../../components/log/MainLogo";
function VerifyOTP({ handleScreen }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpTime, setOtpTime] = useState(5);

  const handleChange = (value) => {
    setOtp(value);
  };
  const handleResend = () => {
    setOtpTime(60);
  };

  const handleVerify = () => {
    setLoading(true);
    console.log(otp);
    try {
      setTimeout(() => {
        setLoading(false);
        handleScreen(4);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainLogo />
      <center className="max-w-xs my-3 space-y-2 mx-auto">
        <h1 className="text-3xl font-bold text-black">Verify your details</h1>
        <p className="text-base text-black/50 font-medium">
          Enter OTP number below
        </p>
      </center>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        isInputNum
        inputStyle={{
          width: "60px",
          height: "50px",
          border: "1px solid gray",
          borderRadius: "6px",
          textAlign: "center",
        }}
        containerStyle={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "36px",
        }}
        renderInput={(props) => <input {...props} />}
      />
      <div className="mt-auto">
        <Button
          name={loading ? <Loader /> : "Verify and continue"}
          onclick={handleVerify}
          disable={loading || otp.length !== 4}
        />
        <div className="mt-5">
          <p className="text-xs text-black/50 font-normal text-center min-h-2">
            Didn’t receive OTP?{" "}
            <VerifyOtpTimer initialTime={60} onResend={handleResend} />
          </p>
        </div>
      </div>
    </>
  );
}

export default VerifyOTP;
