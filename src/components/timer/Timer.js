import React, { useState, useEffect } from "react";

const VerifyOtpTimer = ({ initialTime = 5, onResend }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsResendEnabled(true);
    }
  }, [timeLeft]);

  const handleResendClick = () => {
    if (onResend) {
      onResend();
    }
    setTimeLeft(initialTime);
    setIsResendEnabled(false);
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <>
      {timeLeft > 0 ? (
        <span className=" min-w-fit  p-1.5">
          {formatTime(timeLeft)}
        </span>
      ) : (
        isResendEnabled && (
          <button
            onClick={handleResendClick}
            className="text-xs font-bold text-black p-1.5"
          >
            Resend
          </button>
        )
      )}
    </>
  );
};

export default VerifyOtpTimer;
