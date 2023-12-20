"use client";

import React from "react";

interface GameResultProps {
  timer: number;
  onRestart: () => void;
  onNavigateToMenu: () => void;
}

const GameResult: React.FC<GameResultProps> = ({
  timer,
  onRestart,
  onNavigateToMenu,
}) => {
  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor((milliseconds % 3600000) / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = milliseconds % 100;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(ms).padStart(2, "0")}`;
  };

  return (
    <div>
      <p className="game_over">Gra zakończona!</p>
      <p className="game_over">
        Twój wynik to: <b>{formatTime(timer)}s</b>
      </p>
      <div className="game_results">
        <button className="btn" onClick={onRestart}>
          Powtórz
        </button>
        <button className="btn" onClick={onNavigateToMenu}>
          Wyjdź do menu
        </button>
      </div>
    </div>
  );
};

export default GameResult;
