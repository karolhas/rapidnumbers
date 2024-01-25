"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

interface Score {
  _id: string;
  nickname: string;
  score: number;
}

const Ranking: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch("/api/getScores");
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setScores(data as Score[]);
        }
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchScores();
  }, []);

  return (
    <Container>
      <h1>RANKING</h1>
      <ul>
        {scores.map((score) => (
          <li key={score._id}>
            {score.nickname} - {score.score}
          </li>
        ))}
      </ul>
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
