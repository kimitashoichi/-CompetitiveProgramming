// 問題URL
// https://atcoder.jp/contests/abc159/tasks/abc159_a

function theNumberOfEvenPairs(N: number, M: number) {
  const factorial = (num: number): number => {
    return num * (num - 1);
  }

  const calcProbability = (value: number): number => {
    const PATTERN = 2;
    const molecule = factorial(value);
    return molecule / PATTERN;
  };

  const answer = calcProbability(N) + calcProbability(M);
  console.log(answer);
}

theNumberOfEvenPairs(2, 1) // 1
theNumberOfEvenPairs(4, 3) // 9
theNumberOfEvenPairs(1, 1) // 0
theNumberOfEvenPairs(13, 3) // 81
theNumberOfEvenPairs(0, 3) // 3