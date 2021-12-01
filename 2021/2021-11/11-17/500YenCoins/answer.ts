// 問題URL
// https://atcoder.jp/contests/abc150/tasks/abc150_a

function yenCoins(K: number, X: number) {
  const target = K * 500;
  console.log(target >= X ? 'Yes' : 'No');
}

yenCoins(2, 900); // Yes