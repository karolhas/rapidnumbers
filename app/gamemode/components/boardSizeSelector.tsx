"use client";

interface BoardSizeSelectorProps {
  selectedBoardSize: number | null;
  onBoardSizeChange: (size: number) => void;
}

const BoardSizeSelector: React.FC<BoardSizeSelectorProps> = ({
  selectedBoardSize,
  onBoardSizeChange,
}) => (
  <div className="text-center">
    <h2 className="mb-4">Wybór planszy</h2>
    <div>
      <button
        className={`btn ${selectedBoardSize === 5 ? "active" : ""}`}
        onClick={() => onBoardSizeChange(5)}
      >
        5x5
      </button>
      <button
        className={`btn ${selectedBoardSize === 7 ? "active" : ""}`}
        onClick={() => onBoardSizeChange(7)}
      >
        7x7
      </button>
      <button
        className={`btn ${selectedBoardSize === 10 ? "active" : ""}`}
        onClick={() => onBoardSizeChange(10)}
      >
        10x10
      </button>
    </div>
  </div>
);

export default BoardSizeSelector;
