"use client";

import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useTheme } from "next-themes";

import { Button } from "@/components/Button";
import VolumeSettings from "./components/volumeSettings";
import LanguageSettings from "./components/languageSettings";
import ThemeSettings from "./components/themeSettings";
import Container from "@/components/Container";

import PlFlag from "@/public/pl-flag.png";
import EnFlag from "@/public/en-flag.png";

const Settings: React.FC = () => {
  const { theme: currentTheme, setTheme } = useTheme();
  const isClient = typeof window !== "undefined";
  const [areSettingsChanged, setAreSettingsChanged] = useState<boolean>(false);

  const [changeTheme, setChangeTheme] = useState<string | undefined>(() => {
    const storedTheme = isClient ? localStorage.getItem("theme") : null;
    return storedTheme || "dark";
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
      if (changeTheme !== undefined) {
        localStorage.setItem("theme", changeTheme);
      }
      localStorage.setItem("language", language);
      localStorage.setItem("musicVolume", musicVolume.toString());
      localStorage.setItem("isMusicMuted", JSON.stringify(isMusicMuted));
      localStorage.setItem("soundVolume", soundVolume.toString());
      localStorage.setItem("isSoundMuted", JSON.stringify(isSoundMuted));
    }
    setAreSettingsChanged(false);

    toast.success("Zapisano ustawienia!");
  };

  useEffect(() => {
    setChangeTheme((prevTheme) => {
      const storedTheme = isClient ? localStorage.getItem("theme") : null;
      return storedTheme || prevTheme;
    });
  }, [currentTheme, isClient]);

  const handleThemeChange = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setChangeTheme(newTheme);
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
    <Container>
      <div className="flex flex-col gap-10">
        <Toaster position="top-center" />
        <h1 className="text-[28px] text-center font-medium">USTAWIENIA</h1>
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
            label={currentTheme === "light" ? "CIEMNY" : "JASNY"}
            onClick={handleThemeChange}
          />
        </div>

        <div className="text-center mt-20">
          <Button variant="outline" size="default" onClick={handleBackToMenu}>
            WRÓĆ
          </Button>
          {areSettingsChanged && (
            <Button variant="outline" size="default" onClick={saveSettings}>
              ZAPISZ
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Settings;
