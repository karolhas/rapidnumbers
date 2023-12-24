"use client";

import React, { useState } from "react";

interface GameCardProps {
  number: number;
  onClick: () => void;
  disabled: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ number, onClick, disabled }) => {
  const paletteColors = [
    "#DCDCDC",
    "#1FFFB5",
    "#FF66FF",
    "#FF9933",
    "#3333FF",
    "#E4FF2B",
  ];
  const [bgColor, setBgColor] = useState<string>("#fff");

  const handleMouseEnter = () => {
    if (!disabled) {
      const randomIndex = Math.floor(Math.random() * paletteColors.length);
      const selectedColor = paletteColors[randomIndex];
      setBgColor(selectedColor);
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
