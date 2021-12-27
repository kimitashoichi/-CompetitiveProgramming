// 問題URL
// https://atcoder.jp/contests/abc137/tasks/abc137_a

function questionOne(A: number, B: number) {
  const addition = A + B;
  const subtraction = A - B;
  const multiplication = A * B;
  const ans = Math.max(addition, subtraction, multiplication);
  console.log(ans);
}

questionOne(-13, 3); // -10
questionOne(1, -33); // 34
questionOne(13, 3); // 39