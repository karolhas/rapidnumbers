"use client";

import React from "react";
import GameCard from "@/components/gameCard";

interface GameBoardProps {
  boardSize: number;
  clickedNumbers: number[];
  onCardClick: (number: number) => void;
  gameFinished: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({
  boardSize,
  clickedNumbers,
  onCardClick,
  gameFinished,
}) => {
  const generateGrid = () => {
    const grid: JSX.Element[] = [];
    const totalCards = boardSize * boardSize;

    for (let i = 1; i <= totalCards; i++) {
      grid.push(
        <GameCard
          key={i}
          number={i}
          onClick={() => onCardClick(i)}
          disabled={clickedNumbers.includes(i) || gameFinished}
        />
      );
    }

    return grid;
  };

  const calculateGridTemplateColumns = () => {
    // Ustawiamy szerokość kolumn planszy w zależności od wybranej wielkości planszy
    return `repeat(${boardSize}, 1fr)`;
  };

  return (
    <div
      className="game_board"
      style={{
        display: "grid",
        gridTemplateColumns: calculateGridTemplateColumns(),
      }}
    >
      {generateGrid()}
    </div>
  );
};

export default GameBoard;
