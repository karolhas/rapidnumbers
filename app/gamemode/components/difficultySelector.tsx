"use client";

import { Button } from "@/components/Button";
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
    <h2 className="mb-4 text-xl font-medium uppercase">{title}</h2>
    <Button
      variant={selectedDifficulty === "normal" ? "active" : "outline"}
      size="default"
      onClick={() => onDifficultyChange("normal")}
    >
      <IoHappy size="20" className="mr-2 text-slate-800 dark:text-slate-300" />
      NORMAL
    </Button>
    <Button
      variant={selectedDifficulty === "hardcore" ? "active" : "outline"}
      size="default"
      onClick={() => onDifficultyChange("hardcore")}
    >
      <IoSkull size="20" className="mr-2 text-slate-800 dark:text-slate-300" />
      HARDCORE
    </Button>
  </div>
);

export default DifficultySelector;
