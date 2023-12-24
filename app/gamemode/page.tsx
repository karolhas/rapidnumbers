"use client";

import Link from "next/link";
import { useState } from "react";
import BoardSizeSelector from "@/app/gamemode/components/boardSizeSelector";
import DifficultySelector from "@/app/gamemode/components/difficultySelector";

export default function GameMode() {
  const [selectedBoardSize, setSelectedBoardSize] = useState<number | null>(
    null
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const handleBoardSizeChange = (size: number) => {
    setSelectedBoardSize(size);
  };

  const handleDifficultyChange = (level: string) => {
    setSelectedDifficulty(level);
  };

  const handleStartGame = () => {
    if (selectedBoardSize && selectedDifficulty) {
      const url = `/startgame?boardSize=${selectedBoardSize}&difficulty=${selectedDifficulty}`;
      window.location.href = url;
    }
  };

  return (
    <div className="container">
      <div className="menu">
        <BoardSizeSelector
          selectedBoardSize={selectedBoardSize}
          onBoardSizeChange={handleBoardSizeChange}
        />
        <DifficultySelector
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={handleDifficultyChange}
        />
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
