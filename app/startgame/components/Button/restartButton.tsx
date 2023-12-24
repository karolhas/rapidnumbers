"use client";

import React, { useState } from "react";
import ConfirmModal from "@/app/startgame/components/confirmModal"; // Zastąp ścieżką do ConfirmModal

interface RestartButtonProps {
  onRestart: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({ onRestart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRestartClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmRestart = () => {
    setIsModalOpen(false);
    onRestart();
  };

  const handleCancelRestart = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="restart_btn" onClick={handleRestartClick}>
        RESTART
      </button>

      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmRestart}
        onCancel={handleCancelRestart}
      />
    </div>
  );
};

export default RestartButton;
