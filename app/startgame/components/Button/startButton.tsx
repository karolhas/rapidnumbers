"use client";

import Link from "next/link";

interface StartButtonProps {
  onStartGame: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStartGame }) => (
  <div className="">
    <button className="btn" onClick={onStartGame}>
      START
    </button>
    <Link className="menu_btn" href="/">
      MENU
    </Link>
  </div>
);

export default StartButton;
