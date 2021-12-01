// 問題URL
// https://atcoder.jp/contests/abc102/tasks/abc102_b

function maximumDifference (N: number, A: number[]): void {
  let sortedNumber = A.sort(function desc(a, b) {return b - a})
  const answer = sortedNumber[0] - sortedNumber[N - 1];
  
  console.log(answer)
}

maximumDifference(4, [1, 4, 6, 3]); // 5
maximumDifference(2, [1000000000, 1]); // 999999999
maximumDifference(5, [1, 1, 1, 1, 1]); // 0