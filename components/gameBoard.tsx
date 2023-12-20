"use client";

import React from "react";
import GameCard from "@/components/gameCard";

interface GameBoardProps {
  numbers: number[];
  clickedNumbers: number[];
  onCardClick: (number: number) => void;
  gameFinished: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({
  numbers,
  clickedNumbers,
  onCardClick,
  gameFinished,
}) => {
  return (
    <div className="game_board">
      {numbers.map((number, index) => (
        <GameCard
          key={index}
          number={number}
          onClick={() => onCardClick(number)}
          disabled={clickedNumbers.includes(number) || gameFinished}
        />
      ))}
    </div>
  );
};

export default GameBoard;
