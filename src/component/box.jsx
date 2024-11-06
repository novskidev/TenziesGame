import React from "react";

function Box({ value }) {
  return (
    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm border-black border-2 drop-shadow-md">
      {value}
    </div>
  );
}

export default Box;
