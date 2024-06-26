//components
import { Button } from "@/app/components/Button";
import Container from "@/app/components/Container";

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
      <Container>
         <div className="flex flex-col gap-3">
            <p className="text-2xl text-center font-medium mb-4">
               Dobra robota! Twój wynik to:
            </p>
            <p className="text-2xl text-center">
               Czas: <b>{formatTime(timer)}s</b>
            </p>
            <div className="flex flex-row justify-center items-center mt-10 space-x-4">
               <Button variant="default" size="sm" onClick={onRestart}>
                  POWTÓRZ
               </Button>
               <Button variant="default" size="sm" href="/">
                  WYJDŹ DO MENU
               </Button>
            </div>
         </div>
      </Container>
   );
};

export default GameResult;
