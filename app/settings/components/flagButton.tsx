"use client";

import Image, { StaticImageData } from "next/image";

interface FlagButtonProps {
  label: string;
  flagSrc: StaticImageData;
  onClick: () => void;
}

const FlagButton: React.FC<FlagButtonProps> = ({ label, flagSrc, onClick }) => (
  <button onClick={onClick} className="flag-button">
    <Image width={36} height={36} src={flagSrc} alt={label} />
  </button>
);

export default FlagButton;
