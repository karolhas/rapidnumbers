"use client";

import React, { useState } from "react";
import ConfirmModal from "@/app/components/ConfirmModal";
import { Button } from "@/app/components/Button";

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
         <Button
            variant="default"
            size="sm"
            className="absolute top-[7vh] right-[25%] translate-x-[-50%] text-base cursor-pointer"
            onClick={handleRestartClick}
         >
            RESTART
         </Button>

         <ConfirmModal
            isOpen={isModalOpen}
            onConfirm={handleConfirmRestart}
            onCancel={handleCancelRestart}
         />
      </div>
   );
};

export default RestartButton;
