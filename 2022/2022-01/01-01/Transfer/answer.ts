// 問題URL
// https://atcoder.jp/contests/abc136/tasks/abc136_a

function transfer(A: number, B: number, C: number) {
  const additional = B + C;
  const ans = additional - A;
  console.log(ans <= 0 ? 0 : ans);
}

transfer(6, 4, 3); // 1
transfer(8, 3, 9); // 4
transfer(12, 3, 7); // 0