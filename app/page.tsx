"use client";

import Link from "next/link";
import { IoSettingsSharp, IoPlayCircle } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";

export default function Page() {
  return (
    <div className="container">
      <div className="menu">
        <Link className="btn flex items-center justify-center" href="/gamemode">
          <IoPlayCircle size="22" className="mr-2 text-slate-800" /> WYBÓR GRY
        </Link>
        <Link className="btn flex items-center justify-center" href="/">
          <FaMedal size="20" className="mr-2 text-slate-800" /> RANKING
        </Link>
        <Link className="btn flex items-center justify-center" href="/settings">
          <IoSettingsSharp size="20" className="mr-2 text-slate-800" />
          USTAWIENIA
        </Link>
      </div>
    </div>
  );
}
