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
    <h2 className="mb-4 text-xl font-medium uppercase">{title}</h2>
    <div>
      <Button
        variant={`${selectedBoardSize === 5 ? "active" : "outline"}`}
        size="default"
        onClick={() => onBoardSizeChange(5)}
      >
        5x5
      </Button>
      <Button
        variant={`${selectedBoardSize === 7 ? "active" : "outline"}`}
        size="default"
        onClick={() => onBoardSizeChange(7)}
      >
        7x7
      </Button>
      <Button
        variant={`${selectedBoardSize === 10 ? "active" : "outline"}`}
        size="default"
        onClick={() => onBoardSizeChange(10)}
      >
        10x10
      </Button>
    </div>
  </div>
);

export default BoardSizeSelector;
