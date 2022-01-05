// 問題URL
// https://atcoder.jp/contests/abc133/tasks/abc133_a

function torT(N: number, A: number, B: number) {
  const tarinFee = N * A;
  const taxi = B;
  console.log(tarinFee < taxi ? tarinFee : taxi);
}

torT(4, 2, 9); // 8
torT(4, 2, 7); // 7
torT(4, 2, 8); // 8