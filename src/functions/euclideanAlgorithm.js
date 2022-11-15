function euclideanAlgorithm(a, b) {
    if(b === 0) {
        return a;
    }
    const remainder = a % b;
    return euclideanAlgorithm(b, remainder)
}

export function gcdMultipleNumbers(...args) {
  const gcd = args.reduce((memo, next) => {
      return euclideanAlgorithm(memo, next)}
  );

  return gcd;
}

