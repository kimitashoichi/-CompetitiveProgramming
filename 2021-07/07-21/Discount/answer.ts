// 問題URL
// https://atcoder.jp/contests/abc193/tasks/abc193_a

function discount(A: number, B: number) {
  const COUNT = 1.0000000;
  let target = B / A;

  console.log((COUNT - target) * 100);
}

discount(100, 80) // 20.0
discount(7, 6) // 14.285714285714285714
discount(99999, 99998) // 0.00100001000010000100
