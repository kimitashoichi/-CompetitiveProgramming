// 問題URL
// https://atcoder.jp/contests/abc186/tasks/abc186_a

function brick(N: number, W: number) {
  const ans = Math.floor(N / W);
  console.log(ans);
}

brick(10, 3); // 3
brick(1000, 1); // 1000

