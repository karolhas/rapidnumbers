"use client";

import React, { useState } from "react";

interface GameCardProps {
  number: number;
  onClick: () => void;
  disabled: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ number, onClick, disabled }) => {
  const [bgColor, setBgColor] = useState<string>("#fff");

  const handleMouseEnter = () => {
    if (!disabled) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      setBgColor(randomColor);
    }
  };

  const handleMouseLeave = () => {
    setBgColor("#fff");
  };

  return (
    <button
      className="ingame_btn"
      onClick={onClick}
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1, background: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {number}
    </button>
  );
};

export default GameCard;
