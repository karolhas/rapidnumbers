import { Button } from "@/components/Button";
import Container from "@/components/Container";
import React from "react";
import { connectMongoDB } from "../lib/mongodb";

export default async function RankingPage() {
  const connection = await connectMongoDB();
  console.log(connection);

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
