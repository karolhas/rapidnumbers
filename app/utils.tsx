export const generateRandomNumbers = (boardSize?: number) => {
  const totalNumbers = boardSize ? boardSize * boardSize : 25;
  const numbers = Array.from({ length: totalNumbers }, (_, index) => index + 1);
  return numbers.sort(() => Math.random() - 0.5);
};
