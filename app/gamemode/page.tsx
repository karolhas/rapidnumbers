"use client";

import Link from "next/link";
import { useState } from "react";

export default function GameMode() {
  const [boardSize, setBoardSize] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [selectedBoardSize, setSelectedBoardSize] = useState<number | null>(
    null
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const handleBoardSizeChange = (size: number) => {
    setBoardSize(size);
    setSelectedBoardSize(size);
  };

  const handleDifficultyChange = (level: string) => {
    setDifficulty(level);
    setSelectedDifficulty(level);
  };

  const handleStartGame = () => {
    if (boardSize && difficulty) {
      const url = `/start?boardSize=${boardSize}&difficulty=${difficulty}`;
      window.location.href = url;
    }
  };

  return (
    <div className="container">
      <div className="menu">
        <div className="text-center">
          <h2 className="mb-4">Wybór planszy</h2>
          <div>
            <button
              className={`btn ${selectedBoardSize === 5 ? "active" : ""}`}
              onClick={() => handleBoardSizeChange(5)}
            >
              5x5
            </button>
            <button
              className={`btn ${selectedBoardSize === 7 ? "active" : ""}`}
              onClick={() => handleBoardSizeChange(7)}
            >
              7x7
            </button>
            <button
              className={`btn ${selectedBoardSize === 10 ? "active" : ""}`}
              onClick={() => handleBoardSizeChange(10)}
            >
              10x10
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="mb-4">Wybór poziomu trudności</h2>
          <button
            className={`btn ${selectedDifficulty === "normal" ? "active" : ""}`}
            onClick={() => handleDifficultyChange("normal")}
          >
            Normalny
          </button>
          <button
            className={`btn ${
              selectedDifficulty === "hardcore" ? "active" : ""
            }`}
            onClick={() => handleDifficultyChange("hardcore")}
          >
            Hardcore
          </button>
        </div>

        <div className="text-center mt-20">
          <Link className="btn" href="/">
            WRÓĆ
          </Link>
          <button className="btn" onClick={handleStartGame}>
            DALEJ
          </button>
        </div>
      </div>
    </div>
  );
}
