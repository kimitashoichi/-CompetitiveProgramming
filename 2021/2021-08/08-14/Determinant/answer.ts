// 問題URL
// https://atcoder.jp/contests/abc184/tasks/abc184_a

function determinant(N: number[], M: number[]) {
  const first = N[0] * M[1];
  const second = N[1] * M[0];
  const ans = first - second;
  console.log(ans);
}

determinant([1, 2], [3, 4]) // -2
determinant([0, -1], [1, 0]) // 1
determinant([100, 100], [100, 100]) // 0