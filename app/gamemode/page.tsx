"use client";

import { useState } from "react";
import BoardSizeSelector from "@/app/gamemode/components/boardSizeSelector";
import DifficultySelector from "@/app/gamemode/components/difficultySelector";
import { Button } from "@/components/Button";

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
          title="WYBÓR PLANSZY"
          selectedBoardSize={selectedBoardSize}
          onBoardSizeChange={handleBoardSizeChange}
        />
        <DifficultySelector
          title="WYBIERZ POZIOM TRUDNOŚCI"
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={handleDifficultyChange}
        />
        {error && <div className="error">{error}</div>}
        <div className="text-center mt-28">
          <Button variant="outline" size="default" onClick={handleBackToMenu}>
            WRÓĆ
          </Button>
          <Button variant="outline" size="default" onClick={handleStartGame}>
            DALEJ
          </Button>
        </div>
      </div>
    </div>
  );
}
