export const dateStringToDate = (dateStr: string): Date => {
  // 28/10/2020
  const datePart = dateStr.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(datePart[2], datePart[1] - 1, datePart[0]);
};
