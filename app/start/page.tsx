"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { generateRandomNumbers } from "@/app/utils";
import GameResult from "@/components/gameResult";
import GameBoard from "@/components/gameBoard";

const StartGamePage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers());
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timer, setTimer] = useState(0);
  const [stoperStarted, setStoperStarted] = useState(false);

  const boardSizeParam = searchParams.get("boardSize");
  const difficulty = searchParams.get("difficulty");

  const [boardSize, setBoardSize] = useState<number | null>(
    boardSizeParam ? parseInt(boardSizeParam) : null
  );

  useEffect(() => {
    const generateGameBoard = () => {
      if (boardSize) {
        setNumbers(generateRandomNumbers(boardSize));
      }
    };

    if (boardSize) {
      generateGameBoard();
    }
  }, [boardSize]);

  const startGame = () => {
    setGameStarted(true);
    setStoperStarted(true);
  };

  const restartGame = () => {
    setGameStarted(false);
    setGameFinished(false);
    setStoperStarted(false);
    setTimer(0);
    setNumbers(generateRandomNumbers(boardSize || 5));
    setClickedNumbers([]);
  };

  const handleCardClick = (number: number) => {
    if (number === clickedNumbers.length + 1) {
      setClickedNumbers([...clickedNumbers, number]);
    }

    if (clickedNumbers.length === 24) {
      setGameFinished(true);
      setStoperStarted(false);
    }
  };

  useEffect(() => {
    let startTime: number;
    let interval: number;

    const startStoper = () => {
      startTime = Date.now();
      interval = window.setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        setTimer(elapsedTime);
      }, 1);
    };

    if (stoperStarted) {
      startStoper();
    }

    return () => {
      window.clearInterval(interval);
    };
  }, [stoperStarted]);

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
    <div className="container">
      {!gameStarted ? (
        <div>
          <button className="btn" onClick={startGame}>
            START
          </button>
        </div>
      ) : gameFinished ? (
        <GameResult timer={timer} onRestart={restartGame} />
      ) : (
        <div>
          <p className="game_timer">Czas: {formatTime(timer)}</p>
          <GameBoard
            boardSize={boardSize || 5}
            clickedNumbers={clickedNumbers}
            onCardClick={handleCardClick}
            gameFinished={gameFinished}
          />
        </div>
      )}
    </div>
  );
};

export default StartGamePage;
