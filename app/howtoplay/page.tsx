"use client";

import { Button } from "@/components/Button";
import Container from "@/components/Container";

export default function HowToPlay() {
  const handleBackToMenu = (e: { preventDefault: () => any }) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <Container>
      <div className="flex justify-center">
        <div className="w-[80%] sm:w-[50%] text-[18px] leading-[36px]">
          <h1 className="text-center text-[28px] mb-8">OPIS GRY</h1>
          <ol className="list-decimal">
            <li>W grze znajdziemy różne plansze oraz tryby do wyboru.</li>
            <li className="my-3">
              Plansza {""}
              <span className="border-2 border-white rounded-md p-[0.8px]">
                5x5
              </span>
              {""} zawiera tablicę z liczbami 1-25, plansza{" "}
              <span className="border-2 border-white rounded-md p-[0.8px]">
                7x7
              </span>
              {""} zawiera liczby 1-49 oraz największa, czyli{" "}
              <span className="border-2 border-white rounded-md p-[0.8px]">
                10x10
              </span>
              {""} zawierająca liczby 1-100 (ta opcja jest dostępna tylko na PC
              oraz tabletach).
            </li>
            <li>
              Następnie mamy do wyboru dwa tryby:{" "}
              <span className="border-2 border-white rounded-md p-[0.8px]">
                normalny
              </span>{" "}
              oraz{" "}
              <span className="border-2 border-white rounded-md p-[0.8px]">
                hardcore
              </span>{" "}
              - po każdym kliknięciu w liczbę tablica na nowo się przetasowuje.
            </li>
            <li className="my-4">
              Gra polega na jak najszybszym klikaniu w liczby od najmniejszej do
              największej i zdobyciu najwyższego miejsca w rankingu.
            </li>
          </ol>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleBackToMenu}
          className="absolute bottom-20"
        >
          WRÓĆ
        </Button>
      </div>
    </Container>
  );
}
