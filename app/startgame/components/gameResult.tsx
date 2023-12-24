"use client";

import Link from "next/link";
import React from "react";

interface GameResultProps {
  timer: number;
  onRestart: () => void;
}

const GameResult: React.FC<GameResultProps> = ({ timer, onRestart }) => {
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
        <Link className="btn" href="/">
          Wyjdź do menu
        </Link>
      </div>
    </div>
  );
};

export default GameResult;
