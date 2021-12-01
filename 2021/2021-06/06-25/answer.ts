// 問題URL
// https://atcoder.jp/contests/agc012/tasks/agc012_a

function atCoderGroupContest(N:number, a: number[]) {
  let sortedStrong = a.sort(function asc(a, b) {
    return a - b;
  })

  let teams = [];
  let answerStrongth = 0;

  for (let i = 0; i < N; i++) {
    let arrayLength = sortedStrong.length;
    let addArray = [sortedStrong[0], sortedStrong[arrayLength - 2], sortedStrong[arrayLength - 1]];
    teams.push(addArray);

    // 可能であればこの処理をどうにか縮めたい
    sortedStrong.pop()
    sortedStrong.pop()
    sortedStrong.shift()
  }

   for (let i = 0; i < teams.length; i++) {
    answerStrongth += teams[i][1];
   }

   console.log(answerStrongth);
}

atCoderGroupContest(2, [5, 2, 8, 5, 1, 5]); // 10
atCoderGroupContest(10, [
  1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000,
  1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000,
  1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000,
]); // 10000000000

// とりうる強さの値のうち一番大きくなるようにチームを組む
// チームの強さの和を求める
// [ 2, 2, 3, 3, 4, 4]
// 2 4 4
// 2 3 3

// 強さの配列の一番最初の要素と後ろ2つの要素を取り出して新しい配列を作っていくと最大の数を求めることができる
// 元の配列から要素を削除しつつ、新しい多次元配列に値を入れる
// この処理をN回繰り返す
