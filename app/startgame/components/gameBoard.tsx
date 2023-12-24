"use client";

import React, { useEffect, useState } from "react";
import GameCard from "@/app/startgame/components/gameCard";
import { generateRandomNumbers } from "@/app/utils";

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
  const [shuffledNumbers, setShuffledNumbers] = useState<number[]>([]);
  
  useEffect(() => {
    setShuffledNumbers(generateRandomNumbers(boardSize));
  }, [boardSize]);

  const generateGrid = () => {
    return shuffledNumbers.map((number, index) => (
      <GameCard
        key={index}
        number={number}
        onClick={() => onCardClick(number)}
        disabled={clickedNumbers.includes(number) || gameFinished}
      />
    ));
  };

  const calculateGridTemplateColumns = () => {
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
