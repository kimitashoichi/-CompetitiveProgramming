// 問題URL
// https://atcoder.jp/contests/abc067/tasks/abc067_b

function snakeToy(N: number[], K: number[]) {
  let sticks = K.sort(desc);
  let totalLength = 0;

  for (let i = 0; i < N[1]; i++) {
    totalLength += sticks[i];
  }

  console.log(totalLength);
}

// 降順のsort関数
function desc(a: number, b: number) {
  return b - a;
}

// 昇順のsort関数
function asc(a: number, b: number) {
  return a - b;
}

snakeToy([5, 3], [1,2,3,4,5]); // 12
snakeToy([15, 14], [50, 26, 27, 21, 41, 7, 42, 35, 7, 5, 5, 36, 39, 1, 45]); // 386



// N => 与えられた棒の数, K => 選んだ棒の数（大きい順で）
// Nを大きい順でソートして、K番目までの総和を求めて出力