function calculateAbsolutePercentageDifference(
  initialValue: number,
  finalValue: number
): number {
  const percentageDifference =
    ((finalValue - initialValue) / initialValue) * 100;
  return Math.abs(percentageDifference);
}

function getPriceTrendClasses(
  prevPrice: number | null,
  price: number
): { colorClass: string; shakeClass: string } {
  if (prevPrice === null) {
    return { colorClass: "", shakeClass: "" };
  }

  const priceDifference = calculateAbsolutePercentageDifference(
    prevPrice,
    price
  );
  const shakeClass = priceDifference > 25 ? "symbolCard__shake" : "";
  let colorClass = "";

  if (price > prevPrice) {
    colorClass = "green";
  } else if (price < prevPrice) {
    colorClass = "red";
  }

  return { colorClass, shakeClass };
}

export default getPriceTrendClasses;
