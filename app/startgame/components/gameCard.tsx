"use client";

import React, { useState } from "react";

interface GameCardProps {
  number: number;
  onClick: () => void;
  disabled: boolean;
  style?: React.CSSProperties;
}

const GameCard: React.FC<GameCardProps> = ({
  number,
  onClick,
  disabled,
  style,
}) => {
  const paletteColors = [
    "#DCDCDC",
    "#1FFFB5",
    "#FF66FF",
    "#FF9933",
    "#3333FF",
    "#E4FF2B",
  ];
  const [bgColor, setBgColor] = useState<string>("#F7f7f7");

  const handleMouseEnter = () => {
    if (!disabled) {
      const randomIndex = Math.floor(Math.random() * paletteColors.length);
      const selectedColor = paletteColors[randomIndex];
      setBgColor(selectedColor);
    }
  };

  const handleMouseLeave = () => {
    setBgColor("#F7f7f7");
  };

  return (
    <button
      className="game_card"
      onClick={onClick}
      disabled={disabled}
      style={{ ...style, opacity: disabled ? 0.2 : 1, background: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {number}
    </button>
  );
};

export default GameCard;
