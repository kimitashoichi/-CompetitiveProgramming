// 問題URL
// https://atcoder.jp/contests/abc199/tasks/abc199_b

function intersection(N: number, A: number[], B: number[]) {
  // 範囲が取れなかった時の処理
  if (A[0] === B[0] || A[N - 1] === B[N - 1]) {
    console.log(0);
    return;
  }

  // １つ目の範囲
  const minNumbersLength = Math.abs(B[0] - A[0] + 1);
  let minNumbers = [...Array(minNumbersLength)].map((i, v) => v + A[0]);

  // ２つ目の範囲
  const maxNumbersLength = Math.abs(B[N - 1] - A[N - 1] + 1);
  let maxNumbers = [...Array(maxNumbersLength)].map((i, v) => v + A[N - 1]);

  const answerNumbers = minNumbers.filter((i) => maxNumbers.indexOf(i) !== -1);
  console.log(answerNumbers.length);
}


// AとBは同じ長さ
// Aの最小 <= x <= Bの最小 と Aの最大 <= x <= Bの最大を満たす整数の個数を出力


intersection(2, [3, 2], [7, 5]);
intersection(3, [1, 5, 3], [10, 7, 3]);
intersection(3, [3, 2, 5], [6, 9, 8]);