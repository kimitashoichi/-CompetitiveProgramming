// 問題URL
// https://atcoder.jp/contests/abc176/tasks/abc176_a

function takoyaki(N: number, X: number, T: number) {
  const bakeCount = Math.round(N / X);
  console.log(bakeCount * T);
}

takoyaki(20, 12, 6); // 12
takoyaki(1000, 1, 1000); // 1000000