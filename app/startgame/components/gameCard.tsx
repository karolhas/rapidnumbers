"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();

  const paletteColors = [
    "#DCDCDC",
    "#1FFFB5",
    "#FF66FF",
    "#FF9933",
    "#3333FF",
    "#E4FF2B",
  ];
  const [bgColor, setBgColor] = useState<string>(
    theme === "dark" ? "#555" : "#f7f7f7"
  );

  const handleMouseEnter = () => {
    if (!disabled) {
      const randomIndex = Math.floor(Math.random() * paletteColors.length);
      const selectedColor = paletteColors[randomIndex];
      setBgColor(selectedColor);
    }
  };

  const handleMouseLeave = () => {
    setBgColor(theme === "dark" ? "#555" : "#f7f7f7");
  };

  return (
    <button
      className="text-[18px] transition-all duration-100 border-2 border-[#757575] pointer dark:text-slate-100 dark:border-[#808080]"
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
