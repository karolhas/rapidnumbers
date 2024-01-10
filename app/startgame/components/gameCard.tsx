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

  const darkThemePaletteColors = [
    "#058057",
    "#9e4d9e",
    "#a86420",
    "#2c2cc7",
    "#9c9e19",
  ];
  const lightThemePaletteColors = [
    "#1FFFB5",
    "#f18bfc",
    "#ffb163",
    "#5c91fa",
    "#ecff69",
  ];

  const paletteColors =
    theme === "dark" ? darkThemePaletteColors : lightThemePaletteColors;

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
