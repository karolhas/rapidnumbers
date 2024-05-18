"use client";

import { Button } from "@/app/components/Button";
import Container from "@/app/components/Container";

interface StartButtonProps {
   onStartGame: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStartGame }) => {
   return (
      <Container>
         <div className="flex flex-col justify-center items-center">
            <Button variant="default" size="default" onClick={onStartGame}>
               START
            </Button>
            <Button
               variant="default"
               size="default"
               href="/"
               className="absolute bottom-20"
            >
               MENU
            </Button>
         </div>
      </Container>
   );
};

export default StartButton;
