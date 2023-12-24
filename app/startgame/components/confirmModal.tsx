"use client";

import React, { useState } from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="confirm-modal">
      <div className="modal-content">
        <p>Czy na pewno chcesz zacząć od nowa?</p>
        <button onClick={onConfirm}>TAK</button>
        <button onClick={onCancel}>NIE</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
