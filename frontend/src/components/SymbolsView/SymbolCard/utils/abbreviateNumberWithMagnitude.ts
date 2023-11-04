function formatWithMagnitude(
  number: number,
  magnitude: number,
  suffix: string,
  decimalCount: number
) {
  return `${(number / magnitude).toFixed(decimalCount)}${suffix}`;
}

function abbreviateNumberWithMagnitude(number: number): string {
  const absNumber = Math.abs(number);
  let result = "";

  switch (true) {
    case absNumber >= 1e12:
      result = formatWithMagnitude(number, 1e12, "T", 1);
      break;
    case absNumber >= 1e9:
      result = formatWithMagnitude(number, 1e9, "B", 0);
      break;
    case absNumber >= 1e6:
      result = formatWithMagnitude(number, 1e6, "M", 0);
      break;
    default:
      result = `$${number}`;
      break;
  }

  return result;
}

export default abbreviateNumberWithMagnitude;
