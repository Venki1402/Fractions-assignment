import { useGameState } from "../state-utils";
import Header from "../components/header";
import { useState } from "react";
import FirstStep from "../steps/FirstStep";

export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;
  const [step, setStep] = useState(1);

  return (
    <div className="mx-auto">
      {/* <Header mixedFraction={mixedFraction} /> */}
      {step == 1 && <FirstStep setStep={setStep} />}
    </div>
  );
}
