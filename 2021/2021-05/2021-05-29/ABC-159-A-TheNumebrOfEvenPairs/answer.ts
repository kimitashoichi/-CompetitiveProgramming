// 問題URL
// https://atcoder.jp/contests/abc159/tasks/abc159_a

function judgeEvenPairs (N: number, M: number) {
  let count1 = 0;
  let count2 = 0;
  let answer = 0;

  // 最大数*(最大数 -1) / 組み合わせ数
  if (N >= 2) {
    count1 = N * (N -1) / 2;
  }
  if (M >= 2) {
    count2 = M * (M -1) / 2;
  }

  answer = count1 + count2;

  console.log(answer);
}

judgeEvenPairs(2, 1); // 1
judgeEvenPairs(4, 3); // 9
judgeEvenPairs(1, 1); // 0
judgeEvenPairs(13, 3); // 81
judgeEvenPairs(0, 3); // 3