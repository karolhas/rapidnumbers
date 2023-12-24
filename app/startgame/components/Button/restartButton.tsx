"use client";

interface RestartButtonProps {
  onRestart: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({ onRestart }) => (
  <button className="restart_btn" onClick={onRestart}>
    RESTART
  </button>
);

export default RestartButton;
