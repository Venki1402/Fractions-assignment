"use client";

import React, { useState } from "react";
import { StepModule } from "../../../components/helperComponents/StepModule";
import MixedFraction from "../../../components/helperComponents/MixedFraction";
import PizzaSlices from "../../../components/helperComponents/PizzaSlice";

const FifthStep = ({ setStep }) => {
  const [selectedNumerator, setSelectedNumerator] = useState(0);

  const handleNumeratorChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 4) {
      setSelectedNumerator(value);
    }
  };

  const handleDoneClick = () => {
    alert(`You selected ${selectedNumerator}/4.`);
    setStep((prev) => prev + 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#f54f7b] text-white p-4 rounded-lg">
          <div>Level</div>
          <div className="text-2xl">4</div>
        </div>
        <div className="bg-white p-6 rounded-lg mb-8 text-center text-2xl flex items-center justify-center">
          <MixedFraction whole={3} num={2} denom={4} size="text-2xl" />
          <span className="mx-4">=</span>
          <div className="inline-flex items-center">
            <div className="flex flex-col items-center">
              <span className="font-bold">12</span>
              <div className="border-t  w-4"></div>
              <span className="font-bold">4</span>
            </div>
          </div>
          <span className="mx-4">+</span>
          <div className="inline-flex items-center">
            <div className="flex flex-col items-center">
              <span className="font-bold">2</span>
              <div className="border-t  w-4"></div>
              <span className="font-bold">4</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg text-3xl">🤩</div>
      </div>

      {/* Step Module */}
      <StepModule
        screen="fifth"
        color="#f54f7b"
        stepNumber={4}
        stepText="ADD THE FRACTION"
      />

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* Left Side - Pizza Slices */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center mb-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="px-2">
                <PizzaSlices
                  numerator={4}
                  denominator={4}
                  color="#a4d79c"
                  size="md"
                />
              </div>
            ))}
          </div>
          <div className="text-center text-lg">
            <span className="text-xl font-bold">12</span>/4
          </div>
        </div>
        {/* Right Side - Fraction Picker */}
        <div className="bg-pink-50 p-6 rounded-lg text-center">
          <div className="text-xl mb-6">Select 2/4ths here</div>
          <div className="px-4">
            <PizzaSlices
              numerator={2}
              denominator={4}
              color="#D3EB00"
              size="md"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            {/* Fraction Selector */}
            <div className="flex flex-col items-center">
              <div className="text-2xl">2 / 4</div>
            </div>
          </div>
          <button onClick={handleDoneClick} className="relative mt-8">
            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
            <div className="relative border-2 border-[#f54f7b] bg-white px-6 py-2 text-[#f54f7b] font-bold">
              Done
            </div>
          </button>
        </div>
      </div>

      {/* Step 4 Button */}
      <div className="flex justify-center mt-8">
        <button onClick={() => setStep(1)} className="relative">
          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
          <div className="relative border-2 border-[#f54f7b] bg-white px-6 py-2 text-[#f54f7b] font-bold">
            Home &gt;&gt;
          </div>
        </button>
      </div>
    </div>
  );
};

export default FifthStep;
