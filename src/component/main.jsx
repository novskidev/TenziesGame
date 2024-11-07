import React, { useState, useEffect } from "react";
import Box from "./box";
import { v4 as uuid } from "uuid";

function Main() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [rollCount, setRollCount] = useState(0); // Menyimpan jumlah klik roll

  const holdDice = (id) => {
    setRandomNumbers((prevNumbers) =>
      prevNumbers.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const generateRandom = () => {
    if (allHeld()) {
      resetGame(); // Mulai ulang jika semua dadu sudah tertahan
    } else {
      setRandomNumbers((prevNumbers) =>
        prevNumbers.map(
          (die) =>
            die.isHeld
              ? die // Jika isHeld true, nilai dadu tetap
              : { ...die, value: Math.ceil(Math.random() * 6) } // Jika false, nilai diubah
        )
      );
      setRollCount((prevCount) => prevCount + 1); // Tambah jumlah roll
    }
  };

  const allHeld = () => {
    // Cek apakah semua dadu isHeld true
    return randomNumbers.every((die) => die.isHeld);
  };

  const resetGame = () => {
    // Fungsi untuk reset permainan
    const newNumbers = [];
    for (let i = 0; i < 10; i++) {
      newNumbers.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: uuid(),
      });
    }
    setRandomNumbers(newNumbers);
    setRollCount(0); // Reset hitungan roll
  };

  // Inisialisasi angka acak saat pertama kali komponen dimuat
  useEffect(() => {
    resetGame();
  }, []);

  return (
    <main className="w-box h-box flex flex-col items-center rounded-md gap-6 bg-secondary">
      <h1 className="mt-12 text-center text-5xl font-semibold font-karla">
        Tenzies
      </h1>
      <h4 className="text-center w-3/4 text-2xl">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </h4>
      <div className="w-4/5 h-5 flex justify-around flex-row flex-wrap gap-8">
        {randomNumbers.map((item) => (
          <Box
            key={item.id}
            holdDice={() => holdDice(item.id)}
            value={item.value}
            isHeld={item.isHeld}
          />
        ))}
      </div>
      <p className=" mt-32 text-xl">Roll Count: {rollCount}</p>{" "}
      <button
        className="mt-2 text-white text-lg rounded bg-primary2 py-2 px-4"
        onClick={generateRandom}
      >
        {allHeld() ? "Restart" : "Roll"}
      </button>
    </main>
  );
}

export default Main;
