"use client";

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
  const [error, setError] = useState<string | null>(null);

  const handleBoardSizeChange = (size: number) => {
    setSelectedBoardSize(size);
    setError(null);
  };

  const handleDifficultyChange = (level: string) => {
    setSelectedDifficulty(level);
    setError(null);
  };

  const handleStartGame = () => {
    if (!selectedBoardSize || !selectedDifficulty) {
      setError("Wybierz rozmiar planszy oraz poziom trudności");
    } else {
      setError(null);
      const url = `/startgame?boardSize=${selectedBoardSize}&difficulty=${selectedDifficulty}`;
      window.location.href = url;
    }
  };

  const handleBackToMenu = (e: { preventDefault: () => any }) => {
    e.preventDefault(), (window.location.href = "/");
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
        {error && <div className="error">{error}</div>}
        <div className="text-center mt-28">
          <button className="btn" onClick={handleBackToMenu}>
            WRÓĆ
          </button>
          <button className="btn" onClick={handleStartGame}>
            DALEJ
          </button>
        </div>
      </div>
    </div>
  );
}
