import React, { useState } from "react";
import { StepModule } from "../../../components/helperComponents/StepModule";
import MixedFraction from "../../../components/helperComponents/MixedFraction";
import Fraction from "../../../components/helperComponents/Fraction";

const SecondStep = ({ setStep }) => {
  const [dropZone, setDropZone] = useState({
    whole: null,
    fraction: null,
  });

  const handleDragStart = (e, type, value) => {
    e.dataTransfer.setData("text/plain", JSON.stringify({ type, value }));
  };

  const handleDrop = (e, zone) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    if (data.type === zone) {
      setDropZone((prev) => ({ ...prev, [zone]: data.value }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#f54f7b] text-white p-4 rounded-lg">
          <div>Level</div>
          <div className="text-2xl">1</div>
        </div>
        <div className="bg-white flex-grow p-4 rounded-lg flex items-center justify-center">
          <MixedFraction whole={3} num={2} denom={4} size="text-2xl" />
          <span className="text-2xl mx-4">=</span>
          <Fraction size="text-2xl" />
        </div>
        <div className="bg-white p-4 rounded-lg text-3xl">🤔</div>
      </div>

      {/* Step Module */}
      <StepModule
        screen="second"
        color="#f54f7b"
        stepNumber={1}
        stepText="Sum of WHOLES & FRACTIONS"
      />

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-8 my-8">
        {/* Left Side - Draggable Items */}
        <div className="bg-pink-50 p-8 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="flex gap-2 justify-center mb-4">
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "whole", 3)}
                className="cursor-move"
              >
                <div className="text-4xl text-green-600 border border-black px-3 py-1 shadow-[-2px_2px_0_0_#000]">
                  3
                </div>
              </div>
              <div
                draggable
                onDragStart={(e) =>
                  handleDragStart(e, "fraction", { num: 2, den: 4 })
                }
                className="cursor-move"
              >
                <div className="border border-black px-2 py-1 shadow-[-2px_2px_0_0_#000]">
                  <div className="text-3xl text-purple-600">2</div>
                  <div className="border-t border-black w-4"></div>
                  <div className="text-3xl text-purple-600">4</div>
                </div>
              </div>
            </div>
            <div className="text-[#f54f7b]">pick from here</div>
          </div>
        </div>

        {/* Right Side - Drop Zones */}
        <div className="flex flex-col gap-4">
          <div
            className="border-2 border-green-600 p-4 rounded-lg min-h-[100px]"
            onDrop={(e) => handleDrop(e, "whole")}
            onDragOver={handleDragOver}
          >
            <div className="text-green-600 text-xl mb-2">WHOLES</div>
            {dropZone.whole && (
              <div className="text-3xl text-green-600">{dropZone.whole}</div>
            )}
          </div>

          <div className="text-center text-2xl">+</div>

          <div
            className="border-2 border-purple-600 p-4 rounded-lg min-h-[100px]"
            onDrop={(e) => handleDrop(e, "fraction")}
            onDragOver={handleDragOver}
          >
            <div className="text-purple-600 text-xl mb-2">FRACTION</div>
            {dropZone.fraction && (
              <div className="flex flex-col items-center">
                <div className="text-2xl text-purple-600">
                  {dropZone.fraction.num}
                </div>
                <div className="border-t-2 border-purple-600 w-4"></div>
                <div className="text-2xl text-purple-600">
                  {dropZone.fraction.den}
                </div>
              </div>
            )}
          </div>
          <div className="text-[#f54f7b] text-center">drop here</div>
        </div>
      </div>

      {/* Bottom Section */}
    <div className="bg-white p-6 rounded-lg mb-8 text-center text-2xl flex items-center justify-center">
      <MixedFraction whole={3} num={2} denom={4} size="text-2xl" />
      <span className="mx-4">=</span>
      <span className="text-green-600">3 wholes</span>
      <span className="mx-4">+</span>
      <div className="inline-flex items-center">
        <div className="text-[#f54f7b] flex flex-col items-center">
        <span>2</span>
        <div className="border-t border-[#f54f7b] w-4"></div>
        <span>4</span>
        </div>
      </div>
    </div>

      {/* Next Step Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setStep((prev) => prev + 1)}
          className="relative"
        >
          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
          <div className="relative border-2 border-[#f54f7b] bg-white px-6 py-2 text-[#f54f7b] font-bold">
            STEP 2 &gt;&gt;
          </div>
        </button>
      </div>
    </div>
  );
};

export default SecondStep;
