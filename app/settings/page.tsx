"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import VolumeSettings from "./components/volumeSettings";
import LanguageSettings from "./components/languageSettings";
import ThemeSettings from "./components/themeSettings";

import PlFlag from "@/public/pl-flag.png";
import EnFlag from "@/public/en-flag.png";

const Settings: React.FC = () => {
  const isClient = typeof window !== "undefined";
  const [areSettingsChanged, setAreSettingsChanged] = useState<boolean>(false);

  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = isClient ? localStorage.getItem("theme") : null;
    return storedTheme ? storedTheme : "light";
  });
  const [language, setLanguage] = useState<string>(() => {
    const storedLanguage = isClient ? localStorage.getItem("language") : null;
    return storedLanguage ? storedLanguage : "pl";
  });
  const [musicVolume, setMusicVolume] = useState<number>(() => {
    const storedMusicVolume = isClient
      ? localStorage.getItem("musicVolume")
      : null;
    return storedMusicVolume ? parseInt(storedMusicVolume, 10) : 100;
  });
  const [isMusicMuted, setIsMusicMuted] = useState<boolean>(() => {
    const storedIsMusicMuted = isClient
      ? localStorage.getItem("isMusicMuted")
      : null;
    return storedIsMusicMuted ? JSON.parse(storedIsMusicMuted) : false;
  });
  const [soundVolume, setSoundVolume] = useState<number>(() => {
    const storedSoundVolume = isClient
      ? localStorage.getItem("soundVolume")
      : null;
    return storedSoundVolume ? parseInt(storedSoundVolume, 10) : 100;
  });
  const [isSoundMuted, setIsSoundMuted] = useState<boolean>(() => {
    const storedIsSoundMuted = isClient
      ? localStorage.getItem("isSoundMuted")
      : null;
    return storedIsSoundMuted ? JSON.parse(storedIsSoundMuted) : false;
  });

  const saveSettings = () => {
    if (isClient) {
      localStorage.setItem("theme", theme);
      localStorage.setItem("language", language);
      localStorage.setItem("musicVolume", musicVolume.toString());
      localStorage.setItem("isMusicMuted", JSON.stringify(isMusicMuted));
      localStorage.setItem("soundVolume", soundVolume.toString());
      localStorage.setItem("isSoundMuted", JSON.stringify(isSoundMuted));
    }
    setAreSettingsChanged(false);

    toast.success("Zapisano ustawienia!");
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
        <Toaster position="top-center" />
        <h1 className="text-center">USTAWIENIA</h1>
        <div>
          <VolumeSettings
            title="MUZYKA"
            volume={musicVolume}
            onVolumeChange={handleMusicVolumeChange}
          />
          <VolumeSettings
            title="DŹWIĘKI"
            volume={soundVolume}
            onVolumeChange={handleSoundVolumeChange}
          />
          <LanguageSettings
            title="JĘZYK"
            label={language === "pl" ? "pl" : "en"}
            flagSrcPl={PlFlag}
            flagSrcEn={EnFlag}
            onClick={handleLanguageChange}
          />
          <ThemeSettings
            title="MOTYW"
            label={theme === "light" ? "JASNY" : "CIEMNY"}
            onClick={handleThemeChange}
          />
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
