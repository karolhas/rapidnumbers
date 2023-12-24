"use client";

interface StartButtonProps {
  onStartGame: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStartGame }) => (
  <div>
    <button className="btn" onClick={onStartGame}>
      START
    </button>
  </div>
);

export default StartButton;
