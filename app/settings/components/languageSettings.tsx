"use client";

import { StaticImageData } from "next/image";
import FlagButton from "./flagButton";

interface LanguageSettingsProps {
  title: string;
  label: string;
  flagSrcPl: StaticImageData;
  flagSrcEn: StaticImageData;
  onClick: () => void;
}

const LanguageSettings: React.FC<LanguageSettingsProps> = ({
  title,
  label,
  flagSrcPl,
  flagSrcEn,
  onClick,
}) => (
  <div className="settings_box">
    <h2 className="mr-12">{title}</h2>
    <FlagButton
      label={label}
      flagSrc={label === "pl" ? flagSrcPl : flagSrcEn}
      onClick={onClick}
    />
  </div>
);

export default LanguageSettings;
