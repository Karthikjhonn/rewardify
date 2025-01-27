import React, { useState } from "react";
import LoginLayout from "../../components/layout/LoginLayout";
import LoginScreen from "../../screens/Login/LoginScreen";
import EnterNumber from "../../screens/Login/EnterNumber";
import VerifyOTP from "../../screens/Login/VerifyOTP";
import RegisterStore from "../../screens/Login/RegisterStore";
import SelectStore from "../../screens/Login/SelectStore";

function Login() {
  const [step, setStep] = useState(1);
  const handleSteps = (prop) => {
    setStep(prop);
  };

  return (
    <LoginLayout>
      {step === 1 ? (
        <LoginScreen login={() => handleSteps(2)} />
      ) : step === 2 ? (
        <EnterNumber handleScreen={handleSteps} />
      ) : step === 3 ? (
        <VerifyOTP handleScreen={handleSteps} />
      ) : step === 4 ? (
        <RegisterStore handleScreen={handleSteps} />
      ) : step === 5 ? (
        <SelectStore handleScreen={handleSteps} />
      ) : null}
    </LoginLayout>
  );
}

export default Login;
