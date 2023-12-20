export const generateRandomNumbers = () => {
  const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
  return numbers.sort(() => Math.random() - 0.5);
};
