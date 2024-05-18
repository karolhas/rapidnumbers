"use client";

import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useTheme } from "next-themes";

import { Button } from "@/app/components/Button";
import LanguageSettings from "../components/LanguageSettings";
import ThemeSettings from "@/app/components/ThemeSettings";
import Container from "@/app/components/Container";

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

   const saveSettings = () => {
      if (isClient) {
         if (changeTheme !== undefined) {
            localStorage.setItem("theme", changeTheme);
         }
         localStorage.setItem("language", language);
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

   return (
      <Container>
         <div className="flex flex-col gap-10">
            <Toaster position="top-center" />
            <h1 className="text-[28px] text-center font-medium">USTAWIENIA</h1>
            <div>
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
