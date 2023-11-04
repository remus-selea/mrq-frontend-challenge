function calculateAbsolutePercentageDifference(
  initialValue: number,
  finalValue: number
): number {
  const percentageDifference =
    ((finalValue - initialValue) / initialValue) * 100;
  return Math.abs(percentageDifference);
}

export default calculateAbsolutePercentageDifference;
