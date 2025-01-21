"use client";

import React, { useState } from "react";
import { StepModule } from "../../../components/helperComponents/StepModule";
import MixedFraction from "../../../components/helperComponents/MixedFraction";
import PizzaSlices from "../../../components/helperComponents/PizzaSlice";

const FourthStep = ({ setStep }) => {
  const [wholePieces, setWholePieces] = useState(null);
  const [totalPieces, setTotalPieces] = useState(null);

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (type === "whole") {
      setWholePieces(value);
    } else if (type === "fraction") {
      setTotalPieces(value);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#f54f7b] text-white p-4 rounded-lg">
          <div>Level</div>
          <div className="text-2xl">3</div>
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

      {/* /* Step Module */}
      <StepModule
        screen="fourth"
        color="#f54f7b"
        stepNumber={3}
        stepText="ADD THE FRACTION"
      />

      {/* Pizza Slices Section */}
      <div className="flex justify-center items-center my-8">
        <div className="px-4">
          <PizzaSlices
            numerator={4}
            denominator={4}
            color="#D3EB00"
            size="md"
          />
        </div>
        <div className="px-4">
          <PizzaSlices
            numerator={3}
            denominator={4}
            color="#D3EB00"
            size="md"
          />
        </div>
        <div className="px-4">
          <PizzaSlices
            numerator={0}
            denominator={4}
            color="#D3EB00"
            size="md"
          />
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-pink-50 p-8 rounded-lg text-center">
        <div className="text-xl mb-4">So there are</div>
        <div className="flex justify-center gap-4 items-center">
          <input
            type="number"
            className="w-12 border border-black text-center"
            value={wholePieces || ""}
            onChange={(e) => handleInputChange(e, "whole")}
          />
          <span className="text-xl">1/4-sized pieces in 3 wholes</span>
        </div>

        <div className="my-6 text-xl">Awesome</div>
        <div className="flex items-center justify-center">
          <span className="text-xl">3 wholes = </span>
          <input
            type="number"
            className="w-16 border border-black text-center mx-2"
            value={totalPieces || ""}
            onChange={(e) => handleInputChange(e, "fraction")}
          />
          <span className="text-xl">/ 4</span>
        </div>
      </div>

      {/* Step 4 Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setStep((prev) => prev + 1)}
          className="relative"
        >
          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
          <div className="relative border-2 border-[#f54f7b] bg-white px-6 py-2 text-[#f54f7b] font-bold">
            STEP 4 &gt;&gt;
          </div>
        </button>
      </div>
    </div>
  );
};

export default FourthStep;
