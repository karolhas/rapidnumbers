"use client";

import Link from "next/link";
import { IoSettingsSharp, IoPlayCircle } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { Button } from "@/components/Button";

export default function Page() {
  return (
    <div className="container">
      <div className="menu">
        <Button variant="outline" size="default" href="/gamemode">
          <IoPlayCircle size="22" className="mr-2 text-slate-800" /> WYBÓR GRY
        </Button>
        <Button variant="outline" size="default" href="/">
          <FaMedal size="20" className="mr-2 text-slate-800" /> RANKING
        </Button>
        <Button variant="outline" size="default" href="/settings">
          <IoSettingsSharp size="20" className="mr-2 text-slate-800" />
          USTAWIENIA
        </Button>
      </div>
    </div>
  );
}
