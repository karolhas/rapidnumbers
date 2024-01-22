"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import React from "react";

export default function RankingPage() {
  const handleBackToMenu = (e: { preventDefault: () => any }) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <Container>
      <h1>RANKING</h1>
      <Button
        variant="outline"
        size="sm"
        onClick={handleBackToMenu}
        className="absolute bottom-20"
      >
        WRÓĆ
      </Button>
    </Container>
  );
}
