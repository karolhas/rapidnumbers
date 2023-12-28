"use client";

import { IoSkull, IoHappy } from "react-icons/io5";

interface DifficultySelectorProps {
  title: string;
  selectedDifficulty: string | null;
  onDifficultyChange: (level: string) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  title,
  selectedDifficulty,
  onDifficultyChange,
}) => (
  <div className="text-center">
    <h2 className="mb-4">{title}</h2>
    <button
      className={`btn inline-flex items-center justify-center ${
        selectedDifficulty === "normal" ? "active" : ""
      }`}
      onClick={() => onDifficultyChange("normal")}
    >
      <IoHappy size="20" className="mr-2 text-slate-800" />
      NORMAL
    </button>
    <button
      className={`btn inline-flex items-center justify-center ${
        selectedDifficulty === "hardcore" ? "active" : ""
      }`}
      onClick={() => onDifficultyChange("hardcore")}
    >
      <IoSkull size="20" className="mr-2 text-slate-800" />
      HARDCORE
    </button>
  </div>
);

export default DifficultySelector;
