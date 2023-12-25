"use client";

import { useState } from "react";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const Settings: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");
  const [language, setLanguage] = useState<string>("pl");
  const [volume, setVolume] = useState<number>(50);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "pl" ? "en" : "pl"));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolume(newVolume);
    setIsMuted(false);
  };

  const handleToggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  const handleBackToMenu = (e: { preventDefault: () => any }) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="menu">
        <h1 className="text-center">USTAWIENIA</h1>

        <div className="flex gap-x-8">
          <button className="settings_btn" onClick={handleLanguageChange}>
            {language === "pl" ? "PL" : "EN"}
          </button>
          <button className="settings_btn" onClick={handleToggleMute}>
            {isMuted ? <FaVolumeXmark size="32" /> : <FaVolumeHigh size="32" />}
          </button>
          <button className="settings_btn" onClick={handleThemeChange}>
            {theme === "light" ? "JASNY" : "CIEMNY"}
          </button>
        </div>

        <div className="text-center mt-28">
          <button className="btn" onClick={handleBackToMenu}>
            WRÓĆ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
