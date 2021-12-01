// 【問題概要】
// 10000 円札と、5000 円札と、1000 円札が合計で N 枚あって、合計金額が Y 円であったという。このような条件を満たす各金額の札の枚数の組を 1 つ求めなさい。そのような状況が存在し得ない場合には -1 -1 -1 と出力しなさい。

// 【制約】
// 1≤N≤2000
// 1000≤Y≤2∗10 **7
// N は整数
// Y は 1000 の倍数
// 【数値例】
// 1)
// N=9
// Y=45000
// 答え: (4,0,5) など
// 10000 円札 4 枚と 1000 円札 5 枚で、合計枚数が 9 枚、合計金額が 45000 円になります。他の答えもあります。
// 問題URL
// https://atcoder.jp/contests/abc085/tasks/abc085_c

function calculateTotalAmountCombination(N: number, amout: number): number[] {
  let ans = [];

  // 10000円札の枚数を全検索
  for (let a = 0; a <= N; a++) {
    // 5000円札の枚数を全検索
    for (let b = 0; b <= N; b++) {
      // この時点で10000円札と5000円札の組み合わせは決まっているので、トータルの枚数から引けば1000円札の枚数がわる
      let c = N - a - b;

      // 合計金額を算出
      let total = 10000*a + 5000*b + 1000*c;

      // 合計金額と入力された合計金額が一致する場合は答えの配列に値を保存
      if (total === amout) {
        ans[0] = a;
        ans[1] = b;
        ans[2] = c;
      }
    }
  }

  // 組み合わせが1つもなかった場合の処理
  if(ans.length <= 0) {
    console.log([-1, -1, -1]);
    return [-1, -1, -1];
  }

  console.log(ans);
  return ans;
}

calculateTotalAmountCombination(5, 45000);