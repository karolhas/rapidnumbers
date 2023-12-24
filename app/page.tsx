"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <div className="menu">
        <Link className="btn" href="/gamemode">
          WYBÓR GRY
        </Link>
        <Link className="btn" href="/">
          RANKING
        </Link>
        <Link className="btn" href="/">
          USTAWIENIA
        </Link>
      </div>
    </div>
  );
}
