function abbreviateNumber(number: number) {
  if (Math.abs(number) >= 1e9) {
    return `${Math.floor(number / 1e9)}B`;
  } else if (Math.abs(number) >= 1e6) {
    return `${Math.floor(number / 1e6)}M`;
  } else {
    return `${number}`;
  }
}

export default abbreviateNumber;
