export const dateStringToDate = (dateString: string): Date => {
  const dateArr = dateString
    .split('/')
    .map((digitStr: string): number => parseInt(digitStr, 10));

  const day = dateArr[0];
  const month = dateArr[1] - 1;
  const year = dateArr[2];

  return new Date(year, month, day);
};
