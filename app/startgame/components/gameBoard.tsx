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

  const calculateCardSize = () => {
    let width = "75px";
    let height = "75px";

    if (window.innerWidth < 600) {
      width = "70px";
      height = "70px";
    }

    if (boardSize === 7) {
      width = window.innerWidth < 600 ? "53px" : "70px";
      height = window.innerWidth < 600 ? "53px" : "70px";
    } else if (boardSize === 10) {
      width = window.innerWidth < 600 ? "52px" : "57px";
      height = window.innerWidth < 600 ? "52px" : "57px";
    }

    return { width, height };
  };

  const generateGrid = () => {
    const cardSize = calculateCardSize();

    return shuffledNumbers.map((number, index) => (
      <GameCard
        key={index}
        number={number}
        onClick={() => onCardClick(number)}
        disabled={clickedNumbers.includes(number) || gameFinished}
        style={cardSize}
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
        gap: "3px",
        gridTemplateColumns: calculateGridTemplateColumns(),
      }}
    >
      {generateGrid()}
    </div>
  );
};

export default GameBoard;
