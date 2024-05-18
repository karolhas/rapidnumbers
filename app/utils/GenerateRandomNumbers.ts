export const GenerateRandomNumbers = (boardSize = 5): number[] => {
   const allNumbers = Array.from(
      { length: boardSize * boardSize },
      (_, index) => index + 1
   );

   const shuffledNumbers = shuffleArray(allNumbers);

   return shuffledNumbers;
};

const shuffleArray = <T,>(array: T[]): T[] => {
   const shuffledArray = [...array];
   for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
         shuffledArray[j],
         shuffledArray[i],
      ];
   }
   return shuffledArray;
};
