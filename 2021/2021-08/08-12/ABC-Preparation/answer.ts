// 問題URL
// https://atcoder.jp/contests/abc185/tasks/abc185_a

function abcPreparation(A: number, B: number, C: number, D: number) {
  const problems = [A, B, C, D];
  const ans = Math.min.apply(null, problems);
  console.log(ans);
}

abcPreparation(5, 3, 7, 11); // 3