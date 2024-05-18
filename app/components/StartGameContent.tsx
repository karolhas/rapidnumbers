"use client";

//hooks
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

//components
import { GenerateRandomNumbers } from "@/app/utils/GenerateRandomNumbers";
import GameResult from "@/app/components/GameResult";
import GameBoard from "@/app/components/GameBoard";
import StartButton from "@/app/components/StartButton";
import RestartButton from "@/app/components/RestartButton";
import TimerDisplay from "@/app/components/TimerDisplay";

export default function StartGamePage() {
   const [numbers, setNumbers] = useState<number[]>(GenerateRandomNumbers());
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
            setNumbers(GenerateRandomNumbers(boardSize));
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
      setNumbers(GenerateRandomNumbers(boardSize || 5));
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
            <>
               <TimerDisplay milliseconds={timer} />
               <RestartButton onRestart={restartGame} />
               <GameBoard
                  boardSize={boardSize || 5}
                  clickedNumbers={clickedNumbers}
                  onCardClick={handleCardClick}
                  gameFinished={gameFinished}
               />
            </>
         )}
      </div>
   );
}
