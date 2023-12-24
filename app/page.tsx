"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <div className="menu">
        <Link className="btn" href="/gamemode">
          WYBÓR GRY
        </Link>
        <button className="btn">RANKING</button>
        <button className="btn">USTAWIENIA</button>
      </div>
    </div>
  );
}
