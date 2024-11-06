import React, { useState } from "react";
import Box from "./box";
import { v4 as uuid } from "uuid";

function Main() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandom = () => {
    const newNumbers = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 5) + 1
    );
    setRandomNumbers(newNumbers);
  };

  return (
    <main className="w-box h-box flex flex-col items-center rounded-md gap-6 bg-secondary">
      <h1 className="mt-12 text-center text-3xl font-semibold">Tenzies</h1>
      <h4 className="text-center w-3/4 text-2xl">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h4>
      <div className="w-4/5 h-5 flex justify-around flex-row  flex-wrap gap-8">
        {randomNumbers.map((item) => (
          <Box key={uuid()} value={item} />
        ))}
        <button
          className="text-white text-lg rounded bg-primary2 py-2 px-4"
          onClick={generateRandom}
        >
          {randomNumbers.length === 0 ? "Start" : "Roll"}
        </button>
      </div>
    </main>
  );
}

export default Main;
