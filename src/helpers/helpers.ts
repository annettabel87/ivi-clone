export const formateTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const minutes = time - hours * 60;
  return `${hours} ч. ${minutes} мин.`;
};
