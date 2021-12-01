// 問題URL
// https://atcoder.jp/contests/abc161/tasks/abc161_a

function abcSwap(values: number[]) {
  const newNumbers: number[] = [values[2], values[0], values[1]];
  console.log(newNumbers);
}

abcSwap([1, 2, 3]); // 3 1 2
abcSwap([100, 100, 100]); // 100 100 100
abcSwap([41, 59, 31]); // 31 41 59
