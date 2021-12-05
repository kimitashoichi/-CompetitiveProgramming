// 問題URL
// https://atcoder.jp/contests/abc143/tasks/abc143_a

function curtain(A: number, B: number) {
  const curtainLength = B * 2;
  const ans = A - curtainLength;
  console.log(ans > 0 ? ans : 0);
}

curtain(12, 4); // 4
curtain(20, 15); // 0
curtain(20, 30); // 0