import React from "react";

function Box({ value, holdDice, isHeld }) {
  return (
    <div
      onClick={holdDice}
      className={`w-12 h-12 flex items-center justify-center rounded-sm border-black border-2 drop-shadow-md ${
        isHeld ? "bg-hold" : "bg-white"
      }`}
    >
      {value}
    </div>
  );
}

export default Box;
