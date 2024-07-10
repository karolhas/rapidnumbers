"use client";

//hooks
import { useEffect, useState, useCallback } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useTheme } from "next-themes";

//components
import { Button } from "@/app/components/Button";
import LanguageSettings from "@/app/components/LanguageSettings";
import ThemeSettings from "@/app/components/ThemeSettings";
import Container from "@/app/components/Container";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";

//iamges
import PlFlag from "@/public/pl-flag.png";
import EnFlag from "@/public/en-flag.png";

interface SettingsState {
   theme: string;
   language: string;
}

const DEFAULT_SETTINGS: SettingsState = {
   theme: "dark",
   language: "pl",
};

const Settings: React.FC = () => {
   const { theme: currentTheme, setTheme } = useTheme();
   const [storedSettings, setStoredSettings] = useLocalStorage<SettingsState>(
      "userSettings",
      DEFAULT_SETTINGS
   );

   const [tempSettings, setTempSettings] =
      useState<SettingsState>(storedSettings);
   const [areSettingsChanged, setAreSettingsChanged] = useState<boolean>(false);

   useEffect(() => {
      setTempSettings(storedSettings);
   }, [storedSettings]);

   const handleSettingChange = useCallback(
      (key: keyof SettingsState, value: string) => {
         setTempSettings((prev) => ({ ...prev, [key]: value }));
         setAreSettingsChanged(true);
      },
      []
   );

   const handleThemeChange = useCallback(() => {
      const newTheme = tempSettings.theme === "dark" ? "light" : "dark";
      handleSettingChange("theme", newTheme);
   }, [tempSettings.theme, handleSettingChange]);

   const handleLanguageChange = useCallback(() => {
      const newLanguage = tempSettings.language === "pl" ? "en" : "pl";
      handleSettingChange("language", newLanguage);
   }, [tempSettings.language, handleSettingChange]);

   const saveSettings = useCallback(() => {
      setStoredSettings(tempSettings);
      setTheme(tempSettings.theme);
      setAreSettingsChanged(false);
      toast.success("Zapisano ustawienia!");
   }, [tempSettings, setStoredSettings, setTheme]);

   return (
      <Container>
         <div className="flex flex-col gap-10">
            <Toaster position="top-center" />
            <h1 className="text-[28px] text-center font-medium">USTAWIENIA</h1>
            <div>
               <LanguageSettings
                  title="JĘZYK"
                  label={tempSettings.language}
                  flagSrcPl={PlFlag}
                  flagSrcEn={EnFlag}
                  onClick={handleLanguageChange}
               />
               <ThemeSettings
                  title="MOTYW"
                  label={tempSettings.theme === "light" ? "CIEMNY" : "JASNY"}
                  onClick={handleThemeChange}
               />
            </div>
            <div className="text-center mt-20 space-x-4">
               <Button variant="default" size="default" href="/">
                  WRÓĆ
               </Button>
               {areSettingsChanged && (
                  <Button
                     variant="default"
                     size="default"
                     onClick={saveSettings}
                  >
                     ZAPISZ
                  </Button>
               )}
            </div>
         </div>
      </Container>
   );
};

export default Settings;
