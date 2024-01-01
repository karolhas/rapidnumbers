"use client";

import { Button } from "@/components/Button";

interface StartButtonProps {
  onStartGame: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStartGame }) => {
  const handleBackToMenu = (e: { preventDefault: () => any }) => {
    e.preventDefault(), (window.location.href = "/");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Button variant="outline" size="default" onClick={onStartGame}>
        START
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleBackToMenu}
        className="absolute bottom-20"
      >
        MENU
      </Button>
    </div>
  );
};

export default StartButton;
