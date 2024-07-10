"use client";

//hooks
import { useState } from "react";

//components
import { Button } from "@/app/components/Button";
import Container from "@/app/components/Container";
import BoardSizeSelector from "@/app/components/BoardSizeSelector";
import DifficultySelector from "@/app/components/DifficultySelector";

export default function GameMode() {
   const [selectedBoardSize, setSelectedBoardSize] = useState<number | null>(
      null
   );
   const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
      null
   );
   const [error, setError] = useState<string | null>(null);

   const handleBoardSizeChange = (size: number) => {
      setSelectedBoardSize(size);
      setError(null);
   };

   const handleDifficultyChange = (level: string) => {
      setSelectedDifficulty(level);
      setError(null);
   };

   const handleStartGame = () => {
      if (!selectedBoardSize || !selectedDifficulty) {
         setError("Wybierz rozmiar planszy oraz poziom trudności");
      } else {
         setError(null);
         const url = `/startgame?boardSize=${selectedBoardSize}&difficulty=${selectedDifficulty}`;
         window.location.href = url;
      }
   };

   return (
      <Container>
         <div className="flex flex-col gap-10">
            <BoardSizeSelector
               title="WYBÓR PLANSZY"
               selectedBoardSize={selectedBoardSize}
               onBoardSizeChange={handleBoardSizeChange}
            />
            <DifficultySelector
               title="WYBIERZ POZIOM TRUDNOŚCI"
               selectedDifficulty={selectedDifficulty}
               onDifficultyChange={handleDifficultyChange}
            />
            {error && (
               <div className="w-[70%] absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-red-600 font-medium uppercase text-center">
                  {error}
               </div>
            )}
            <div className="text-center mt-28 space-x-4">
               <Button variant="default" size="default" href="/">
                  WRÓĆ
               </Button>
               <Button
                  variant="default"
                  size="default"
                  onClick={handleStartGame}
               >
                  DALEJ
               </Button>
            </div>
         </div>
      </Container>
   );
}
