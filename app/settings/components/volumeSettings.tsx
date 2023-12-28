"use client";

import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

interface VolumeSettingsProps {
  title: string;
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VolumeSettings: React.FC<VolumeSettingsProps> = ({
  title,
  volume,
  onVolumeChange,
}) => (
  <div className="settings_box">
    <h2 className="mr-12">{title}</h2>
    <div className="flex">
      <FaVolumeMute size="24" />
      <input
        type="range"
        value={volume}
        onChange={onVolumeChange}
        className="mx-4"
      />
      <FaVolumeUp size="24" />
    </div>
  </div>
);

export default VolumeSettings;
