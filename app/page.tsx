"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/app/components/Button";
import Container from "@/app/components/Container";
import LogoWhite from "@/public/logo-white.webp";
import LogoBlack from "@/public/logo-black.webp";

import { IoSettingsSharp, IoPlayCircle } from "react-icons/io5";
import { FaMedal, FaQuestion } from "react-icons/fa";

import { useLocalStorage } from "@/app/hooks/useLocalStorage";

interface SettingsState {
   theme: string;
   language: string;
}

const DEFAULT_SETTINGS: SettingsState = {
   theme: "dark",
   language: "pl",
};

export default function Page() {
   const [storedSettings] = useLocalStorage<SettingsState>(
      "userSettings",
      DEFAULT_SETTINGS
   );
   const [logo, setLogo] = useState(LogoWhite);

   useEffect(() => {
      setLogo(storedSettings.theme === "dark" ? LogoWhite : LogoBlack);
   }, [storedSettings.theme]);

   return (
      <Container>
         <div className="grid grid-cols-1 space-y-16">
            <Image
               src={logo}
               alt="logo"
               width={250}
               height={250}
               className="md:w-[320px]"
               quality={75}
            />
            <div className="flex flex-col gap-8 mx-auto">
               <Button variant="default" size="default" href="/gamemode">
                  <IoPlayCircle
                     size={22}
                     className="mr-2 text-slate-800 dark:text-slate-300"
                  />
                  WYBÓR GRY
               </Button>
               <Button variant="default" size="default" href="/ranking">
                  <FaMedal
                     size={20}
                     className="mr-2 text-slate-800 dark:text-slate-300"
                  />
                  RANKING
               </Button>
               <Button variant="default" size="default" href="/settings">
                  <IoSettingsSharp
                     size={20}
                     className="mr-2 text-slate-800 dark:text-slate-300"
                  />
                  USTAWIENIA
               </Button>
               <Button variant="default" size="default" href="/howtoplay">
                  <FaQuestion
                     size={20}
                     className="mr-2 text-slate-800 dark:text-slate-300"
                  />
                  JAK GRAĆ
               </Button>
            </div>
         </div>
      </Container>
   );
}
