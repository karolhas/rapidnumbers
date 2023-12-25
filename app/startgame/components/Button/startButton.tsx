"use client";

interface StartButtonProps {
  onStartGame: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStartGame }) => {
  const handleBackToMenu = (e: { preventDefault: () => any }) => {
    e.preventDefault(), (window.location.href = "/");
  };

  return (
    <div>
      <button className="btn" onClick={onStartGame}>
        START
      </button>
      <button className="menu_btn" onClick={handleBackToMenu}>
        MENU
      </button>
    </div>
  );
};

export default StartButton;
