import Fraction from "@/components/helperComponents/Fraction";
import Header from "@/components/helperComponents/Header";
import MixedFraction from "@/components/helperComponents/MixedFraction";
import { Button } from "@/components/ui/button";
import React from "react";

const FirstStep = ({ setStep }) => {
  return (
    <div>
      <Header />
      <div className="border-[6px] border-[#f54f7b] h-36">
        <div className="flex items-center justify-center w-full h-full ">
          <div className=" flex items-center justify-center border-4 border-[#f54f7b] w-[30%] h-full text-4xl border-r-[6px] text-[#f54f7b]">
            Level 1
          </div>
          <div className="flex items-center justify-center space-x-2 border-4 border-[#f54f7b] w-[70%] h-full ">
            {/* Mixed Number */}
            <MixedFraction whole={3} num={2} denom={4} size="text-5xl" />
            <div className="text-5xl ">=</div>
            <Fraction size="text-5xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="relative mt-9">
          <div className="absolute -left-1 -bottom-1 w-full h-full bg-black "></div>
          <div className="relative border-4 border-[#FF497C] bg-white px-8 py-2 ">
            <div
              className="text-[#FF497C] text-xl font-bold"
              onClick={() => {
                setStep((prev) => prev + 1);
                console.log(`🚀 next step clicked`);
                
              }}
            >
              Start &gt;&gt;
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FirstStep;
