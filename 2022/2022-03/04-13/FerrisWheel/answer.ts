// 問題URL
// https://atcoder.jp/contests/abc127/tasks/abc127_a

function ferrisWheel (A: number, B: number) {
  const NORMAL_PRICE = 13;
  const FREE = 5

  if (A >= NORMAL_PRICE) {
    console.log(B);
  } else if (A <= FREE) {
    console.log(0);
  } else {
    console.log(B / 2);
  }
}

ferrisWheel(30, 100); // 100
ferrisWheel(12, 100); // 50
ferrisWheel(0, 100); // 0
