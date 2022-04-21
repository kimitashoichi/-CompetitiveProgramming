// 問題URL
// https://atcoder.jp/contests/abc125/tasks/abc125_a

function BiscuitGenerator (A: number, B: number, T: number) {
  let ans = 0;
  const time = T + 0.5;
  // TがAより小さい場合は0を出力する

  for (let i = A; i < time; i += A) {
    ans += B
  }

  console.log(ans);
}

BiscuitGenerator(3, 5, 7); // 10
BiscuitGenerator(3, 2, 9); // 6
BiscuitGenerator(20, 20, 19); // 0