// 問題URL
// https://atcoder.jp/contests/abc205/tasks/abc205_a

function kcal(A: number, B: number) {
  let targetKal = B / 100;
  const answer = targetKal * A;
  console.log(answer);
}

kcal(45, 200); // 90

kcal(37, 450); // 166.5

kcal(0, 1000); // 0

