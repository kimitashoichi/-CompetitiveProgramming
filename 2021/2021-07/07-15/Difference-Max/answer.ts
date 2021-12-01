// 問題URL
// https://atcoder.jp/contests/abc196/tasks/abc196_a

function differenceMax(a: number, b: number, c: number, d: number) {
  const answer = b - c;
  console.log(answer);
}

// 単純にb - c が最大の差になる

differenceMax(0, 10, 0, 10); // 10
differenceMax(-100, -100, 100, 100) // -200
differenceMax(-100, 100, -100, 100) // 200