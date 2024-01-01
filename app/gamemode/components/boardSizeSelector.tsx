"use client";

import { Button } from "@/components/Button";

interface BoardSizeSelectorProps {
  title: string;
  selectedBoardSize: number | null;
  onBoardSizeChange: (size: number) => void;
}

const BoardSizeSelector: React.FC<BoardSizeSelectorProps> = ({
  title,
  selectedBoardSize,
  onBoardSizeChange,
}) => (
  <div className="text-center">
    <h2 className="mb-4">{title}</h2>
    <div>
      <Button
        variant="outline"
        size="default"
        className={`btn ${selectedBoardSize === 5 ? "active" : ""}`}
        onClick={() => onBoardSizeChange(5)}
      >
        5x5
      </Button>
      <Button
        variant="outline"
        size="default"
        className={`btn ${selectedBoardSize === 7 ? "active" : ""}`}
        onClick={() => onBoardSizeChange(7)}
      >
        7x7
      </Button>
      <Button
        variant="outline"
        size="default"
        className={`btn ${selectedBoardSize === 10 ? "active" : ""}`}
        onClick={() => onBoardSizeChange(10)}
      >
        10x10
      </Button>
    </div>
  </div>
);

export default BoardSizeSelector;
