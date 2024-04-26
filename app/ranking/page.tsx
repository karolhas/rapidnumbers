"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";

const Ranking: React.FC = () => {
  return (
    <Container>
      <h1>RANKING</h1>
      <h2>Wkrótce...</h2>
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
};

export default Ranking;
