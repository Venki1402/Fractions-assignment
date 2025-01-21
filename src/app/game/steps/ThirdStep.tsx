import Fraction from "@/components/helperComponents/Fraction";
import MixedFraction from "@/components/helperComponents/MixedFraction";
import PizzaSlices from "@/components/helperComponents/PizzaSlice";
import PieSlicerSelector from "@/components/helperComponents/Slicer";
import { StepModule } from "@/components/helperComponents/StepModule";
import React from "react";

const ThirdStep = ({ setStep }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#f54f7b] text-white p-4 rounded-lg">
          <div>Level</div>
          <div className="text-2xl">2</div>
        </div>
        <div className="bg-white p-6 rounded-lg mb-8 text-center text-2xl flex items-center justify-center">
          <MixedFraction whole={3} num={2} denom={4} size="text-2xl" />
          <span className="mx-4">=</span>
          <span className="font-bold">3</span>
          <span className="mx-4">+</span>
          <div className="inline-flex items-center">
            <div className="flex flex-col items-center">
              <span className="font-bold">2</span>
              <div className="border-t  w-4"></div>
              <span className="font-bold">4</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg text-3xl">😃</div>
      </div>

      {/* Step Module */}
      <StepModule
        screen="third"
        color="#f54f7b"
        stepNumber={2}
        stepText="Wholes to Fractions"
      />

      <div className="flex justify-center my-8">
        <div className="flex gap-3">
          <PizzaSlices numerator={0} denominator={0} color="#D3EB00" />
          <PizzaSlices numerator={0} denominator={0} color="#D3EB00" />
          <PizzaSlices numerator={0} denominator={0} color="#D3EB00" />
        </div>
      </div>

      <PieSlicerSelector />

      {/* Next Step Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setStep((prev) => prev + 1)}
          className="relative"
        >
          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
          <div className="relative border-2 border-[#f54f7b] bg-white px-6 py-2 text-[#f54f7b] font-bold">
            STEP 3 &gt;&gt;
          </div>
        </button>
      </div>
    </div>
  );
};

export default ThirdStep;
