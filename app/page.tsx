"use client";

import { IoSettingsSharp, IoPlayCircle } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { Button } from "@/components/Button";
import Container from "@/components/Container";

export default function Page() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <Button variant="outline" size="default" href="/gamemode">
          <IoPlayCircle
            size="22"
            className="mr-2 text-slate-800 dark:text-slate-300"
          />
          WYBÓR GRY
        </Button>
        <Button variant="outline" size="default" href="/">
          <FaMedal
            size="20"
            className="mr-2 text-slate-800 dark:text-slate-300"
          />
          RANKING
        </Button>
        <Button variant="outline" size="default" href="/settings">
          <IoSettingsSharp
            size="20"
            className="mr-2 text-slate-800 dark:text-slate-300"
          />
          USTAWIENIA
        </Button>
      </div>
    </Container>
  );
}
