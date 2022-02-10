// 問題URL
// https://atcoder.jp/contests/abc130/tasks/abc130_a

function rounding(X: number, A: number) {
  if (X < A) {
    console.log(0);
  } else {
    console.log(10);
  }
}

rounding(3, 5); // 0
rounding(7, 5); // 10
rounding(6, 6); // 10