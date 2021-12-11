// 問題URL
// https://atcoder.jp/contests/abc138/tasks/abc138_b

// 配列要素の全てを小数点に変更し合算
// 1 / 合計が答え

function resistorsInParallel(N: number, A: number[]) {
  const convertArray = A.map(value => Number((1 / value).toFixed(5)));
  const total = convertArray.reduce((current, total) => total += current);
  const ans = (1 / total).toFixed(5);
  console.log(ans);
}

resistorsInParallel(2, [10, 30]); // 7.5
resistorsInParallel(3, [200, 200, 200]); // 66.66666666666667
resistorsInParallel(1, [1000]); // 1000
