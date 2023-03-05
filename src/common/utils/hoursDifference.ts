export const hoursDifference = (startDate: Date, endDate: Date): number => {
  const diffInMs = endDate.getTime() - startDate.getTime();
  const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
  return diffInHours;
};
