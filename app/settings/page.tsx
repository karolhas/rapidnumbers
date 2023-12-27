"use client";

import { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
// import { Toaster } from "react-hot-toast";

const Settings: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });
  const [language, setLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? storedLanguage : "pl";
  });
  const [musicVolume, setMusicVolume] = useState<number>(() => {
    const storedMusicVolume = localStorage.getItem("musicVolume");
    return storedMusicVolume ? parseInt(storedMusicVolume, 10) : 100;
  });
  const [isMusicMuted, setIsMusicMuted] = useState<boolean>(() => {
    const storedIsMusicMuted = localStorage.getItem("isMusicMuted");
    return storedIsMusicMuted ? JSON.parse(storedIsMusicMuted) : false;
  });
  const [soundVolume, setSoundVolume] = useState<number>(() => {
    const storedSoundVolume = localStorage.getItem("soundVolume");
    return storedSoundVolume ? parseInt(storedSoundVolume, 10) : 100;
  });
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(() => {
    const storedIsSoundMuted = localStorage.getItem("isSoundMuted");
    return storedIsSoundMuted ? JSON.parse(storedIsSoundMuted) : false;
  });

  const [areSettingsChanged, setAreSettingsChanged] = useState<boolean>(false);

  const saveSettings = () => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
    localStorage.setItem("musicVolume", musicVolume.toString());
    localStorage.setItem("isMusicMuted", JSON.stringify(isMusicMuted));
    localStorage.setItem("soundVolume", soundVolume.toString());
    localStorage.setItem("isSoundMuted", JSON.stringify(isSoundMuted));

    setAreSettingsChanged(false);
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setAreSettingsChanged(true);
  };

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "pl" ? "en" : "pl"));
    setAreSettingsChanged(true);
  };

  const handleMusicVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setMusicVolume(newVolume);
    setIsMusicMuted(false);
    setAreSettingsChanged(true);
  };

  const handleSoundVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value, 10);
    setSoundVolume(newVolume);
    setIsSoundMuted(false);
    setAreSettingsChanged(true);
  };

  const handleBackToMenu = (e: { preventDefault: () => any }) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="menu">
        <h1 className="text-center">USTAWIENIA</h1>

        <div>
          <div className="settings_box">
            <h2 className="mr-12">Muzyka</h2>
            <FaVolumeMute size="28" />
            <input
              type="range"
              value={musicVolume}
              onChange={handleMusicVolumeChange}
              className="mx-4"
            />
            <FaVolumeUp size="28" />
          </div>

          <div className="settings_box">
            <h2 className="mr-12">DŹWIĘKI</h2>
            <FaVolumeMute size="28" />
            <input
              type="range"
              value={soundVolume}
              onChange={handleSoundVolumeChange}
              className="mx-4"
            />
            <FaVolumeUp size="28" />
          </div>

          <div className="settings_language">
            <h2 className="mr-12">JĘZYK</h2>
            <button className="" onClick={handleLanguageChange}>
              {language === "pl" ? "POLSKI" : "ANGIELSKI"}
            </button>
          </div>

          <div className="settings_theme">
            <h2 className="mr-12">MOTYW</h2>
            <button className="" onClick={handleThemeChange}>
              {theme === "light" ? "JASNY" : "CIEMNY"}
            </button>
          </div>
        </div>

        <div className="text-center mt-20">
          <button className="btn" onClick={handleBackToMenu}>
            WRÓĆ
          </button>
          {areSettingsChanged && (
            <button className="settings_btn" onClick={saveSettings}>
              ZAPISZ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
