// 問題URL
// https://atcoder.jp/contests/agc027/tasks/agc027_a


// N: 子供の人数, X: お菓子の数, a: 各子供がもらうと喜ぶお菓子の数
function candyDistributionAgain(N: number, X: number, a: number[]) {
  // 小さい順にソート
  let childNumber = a.sort(function asc(a, b) {
    return a - b;
  });
  let total = X;
  let count = 0;


  for (let i = 0; i < childNumber.length; i++) {
    // 合計のお菓子の数が大将より大きいかどうかのチェック
    if (total >= childNumber[i]) {
      total -= childNumber[i];

      // 与えられた数値の配列の最後の要素を引いた後にtotalが０より大きい（お菓子が余っている場合）はカウントを加算しないようにする ⇨ ぴったりじゃないと答えに換算できないから
      if (i !== childNumber.length - 1 && total < 0) {

      } else {
        count++
      }
    }
  }

  console.log(count);
}

candyDistributionAgain(3, 70, [20, 30, 10]) // 2
candyDistributionAgain(3, 10, [20, 30, 10]) // 1
candyDistributionAgain(4, 1111, [1, 10, 100, 1000]) // 4
candyDistributionAgain(2, 10, [20, 20]) // 0

// お菓子の数の合計が子供がもらうと喜ぶ数の合計と同じであればNが答え
// それ以外
// お菓子の数が子供がもらうと喜ぶ数の合計より多い場合
// 