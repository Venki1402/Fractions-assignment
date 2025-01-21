import React from "react";
import { Fraction } from "../../app/game/game-state";

interface HeaderProps {
  fraction: Fraction;
}

const Header: React.FC<HeaderProps> = ({ fraction }) => {
  return (
    <div className="bg-[#e3f261] p-6 border-t-4 border-b-4 border-blue-600">
      <h1 className="text-4xl font-bold flex items-center justify-center gap-4">
        Convert
        <div className="bg-white px-4 py-2 inline-flex flex-col items-center border border-black">
          <span>{fraction.numerator}</span>
          <div className="w-4 h-px bg-black" />
          <span>{fraction.denominator}</span>
        </div>
        to a mixed fraction
      </h1>
    </div>
  );
};

export default Header;
