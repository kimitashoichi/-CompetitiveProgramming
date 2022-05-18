// https://atcoder.jp/contests/abc120/tasks/abc120_b

function kthCommonDivisor (A: number, B: number, K: number) {
  const calcDivisors = (target: number): number[] => {
    let divisors: number[] = [];
    for (let i = 1; i <= target; i++) {
      if (target % i === 0) {
        divisors.push(i);
      }
    }

    return divisors;
  }

  const divisorOfA = calcDivisors(A);
  const divisorOfB = calcDivisors(B);
  const allDivisors = [...divisorOfA, ...divisorOfB];
  const commonDivisor = allDivisors.filter(value =>
    divisorOfA.includes(value) && divisorOfB.includes(value)
  );
  const filteredCommonDivisor = commonDivisor.filter((value, pos) => commonDivisor.indexOf(value) === pos);
  console.log(filteredCommonDivisor);

  console.log(filteredCommonDivisor[K - 1]);
}

kthCommonDivisor(8, 12, 2); // 2
kthCommonDivisor(100, 50, 4); // 5
kthCommonDivisor(1, 1, 1); // 1
