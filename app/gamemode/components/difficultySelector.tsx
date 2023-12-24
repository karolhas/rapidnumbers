"use client";

interface DifficultySelectorProps {
  selectedDifficulty: string | null;
  onDifficultyChange: (level: string) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onDifficultyChange,
}) => (
  <div className="text-center">
    <h2 className="mb-4">Wybór poziomu trudności</h2>
    <button
      className={`btn ${selectedDifficulty === "normal" ? "active" : ""}`}
      onClick={() => onDifficultyChange("normal")}
    >
      Normalny
    </button>
    <button
      className={`btn ${selectedDifficulty === "hardcore" ? "active" : ""}`}
      onClick={() => onDifficultyChange("hardcore")}
    >
      Hardcore
    </button>
  </div>
);

export default DifficultySelector;
