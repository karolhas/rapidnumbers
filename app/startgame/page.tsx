"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { generateRandomNumbers } from "@/app/startgame/components/generateRandomNumbers";

import GameResult from "@/app/startgame/components/gameResult";
import GameBoard from "@/app/startgame/components/gameBoard";
import StartButton from "@/app/startgame/components/Button/startButton";
import RestartButton from "@/app/startgame/components/Button/restartButton";
import TimerDisplay from "@/app/startgame/components/timerDisplay";

export default function StartGamePage() {
  const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers());
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timer, setTimer] = useState(0);
  const [stoperStarted, setStoperStarted] = useState(false);

  const searchParams = useSearchParams();

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
  }, [boardSize, gameFinished]);

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

    const maxNumber = boardSize ? boardSize * boardSize : 25;

    if (clickedNumbers.length === maxNumber - 1) {
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

  return (
    <div className="container">
      {!gameStarted ? (
        <StartButton onStartGame={startGame} />
      ) : gameFinished ? (
        <GameResult timer={timer} onRestart={restartGame} />
      ) : (
        <div>
          <TimerDisplay milliseconds={timer} />
          <RestartButton onRestart={restartGame} />
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
}
