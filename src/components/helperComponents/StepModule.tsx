import React from "react";

interface StepModuleProps {
  screen: string;
  color: string;
  stepNumber: number;
  numerator?: number;
  denominator?: number;
  stepText: string;
}

export const StepModule: React.FC<StepModuleProps> = ({
  screen,
  color,
  stepNumber,
  numerator,
  denominator,
  stepText,
}) => {
  return (
    <div className="flex items-stretch justify-center gap-4">
      <div
        className="bg-white border-8 px-6 py-2 flex items-center justify-center"
        style={{ color: color, borderColor: color }}
      >
        <span className="text-2xl font-bold">STEP {stepNumber}</span>
      </div>
      <div
        className="flex-1 border-8 flex items-center max-w-xl"
        style={{ color: color, borderColor: color, backgroundColor: color }}
      >
        <h2 className="text-white text-2xl font-bold flex items-center gap-4 mx-auto">
          {screen === "first" && numerator && denominator && (
            <>
              <span>CREATE</span>
              <div className="bg-white text-black px-3 py-1 inline-flex flex-col items-center">
                <span>{numerator}</span>
                <div className="w-3 h-px bg-black" />
                <span>{denominator}</span>
              </div>
              <span>LEGO BLOCKS</span>
            </>
          )}
          {screen === "second" && (
            <div className="flex items-center justify-center my-4">
              <span>{stepText}</span>
            </div>
          )}
        </h2>
      </div>
    </div>
  );
};
