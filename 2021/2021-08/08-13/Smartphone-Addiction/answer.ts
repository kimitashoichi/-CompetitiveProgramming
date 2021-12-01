// 問題URL
// https://atcoder.jp/contests/abc185/tasks/abc185_b


function smartphoneAddiction(N: number, M: number, T: number, time: number[][]) {
  const MAX_AMOUNT = N;
  let first = N;

  for (let i = 0; i < time.length; i++) {
    // 最初のカフェ到着までの消費量
    if (i === 0) {
      first -= time[i][i]
    } else {
      // カフェでの充電
      let puls = time[i][i] - time[i][i - 1];
      console.log(puls)
      first += puls;

      // バッテリーの充電量が最大値を超えないかチェック
      if (first > MAX_AMOUNT) {
        first = MAX_AMOUNT;
      }
    }
  }

  // 到着時間までのバッテリー消費計算
  const last = T - time[M - 1][1];
  first -= last;

  if (first > 0 ) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

smartphoneAddiction(10, 2, 20, [
  [9, 11],
  [13, 17]
]); // Yes;