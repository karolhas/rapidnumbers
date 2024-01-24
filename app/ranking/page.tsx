import { Button } from "@/components/Button";
import Container from "@/components/Container";
import React from "react";

export default async function RankingPage() {
  return (
    <Container>
      <h1>RANKING</h1>
      <Button
        variant="outline"
        size="sm"
        href="/"
        className="absolute bottom-20"
      >
        WRÓĆ
      </Button>
    </Container>
  );
}
