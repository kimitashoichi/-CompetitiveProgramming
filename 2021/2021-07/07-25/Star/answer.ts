// 問題URL
// https://atcoder.jp/contests/abc192/tasks/abc192_a

function star(X: number) {
  const HUNDRED = 100;
  const target = X % HUNDRED;
  const answer = HUNDRED - target;

  console.log(answer);
}

star(140); // 60
star(1000) // 100