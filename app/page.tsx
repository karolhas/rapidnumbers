"use client";

import { useState, useEffect } from "react";
import { generateRandomNumbers } from "./utils";
import GameResult from "@/components/gameResult";
import GameBoard from "@/components/gameBoard";

export default function Page() {
  const [numbers, setNumbers] = useState<number[]>(generateRandomNumbers());
  const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timer, setTimer] = useState(0);
  const [stoperStarted, setStoperStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setStoperStarted(true);
  };

  const restartGame = () => {
    setGameStarted(false);
    setGameFinished(false);
    setStoperStarted(false);
    setTimer(0);
    setNumbers(generateRandomNumbers());
    setClickedNumbers([]);
  };

  const navigateToMenu = () => {
    window.location.href = "/";
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
    <main>
      <div className="container">
        {!gameStarted ? (
          <div className="menu">
            <button className="btn" onClick={startGame}>
              START
            </button>
            <button className="btn">RANKING</button>
            <button className="btn">OSIĄGNIĘCIA</button>
            <button className="btn">USTAWIENIA</button>
          </div>
        ) : gameFinished ? (
          <GameResult
            timer={timer}
            onRestart={restartGame}
            onNavigateToMenu={navigateToMenu}
          />
        ) : (
          <div>
            <p className="game_timer">Timer: {formatTime(timer)}</p>
            <GameBoard
              numbers={numbers}
              clickedNumbers={clickedNumbers}
              onCardClick={handleCardClick}
              gameFinished={gameFinished}
            />
          </div>
        )}
      </div>
    </main>
  );
}
