import { useGameState } from "../state-utils";
import Header from "../components/header";
import { useState } from "react";
import FirstStep from "../steps/FirstStep";
import SecondStep from "../steps/SecondStep";

export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;
  const [step, setStep] = useState(1);

  return (
    <div className="mx-auto w-full min-h-screen flex items-center justify-center">
      {/* <Header mixedFraction={mixedFraction} /> */}

      {step == 1 && <FirstStep setStep={setStep} />}
      {step == 2 && <SecondStep setStep={setStep} />}
    </div>
  );
}
