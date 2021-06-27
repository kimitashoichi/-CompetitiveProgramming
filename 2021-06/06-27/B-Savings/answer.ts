// 問題URL
// https://atcoder.jp/contests/abc206/tasks/abc206_b

function savings(N: number) {
  let toalMoney = 0;
  let pastDays = 0;
  let savingMoney = 1;

  while(true) {
    // 貯金
    toalMoney += savingMoney;
    // 貯金額と経過日数のカウント
    pastDays++;
    savingMoney++;

    if (toalMoney >= N) {
      break;
    }
  }

  console.log(pastDays);
}

savings(12) // 5
savings(100128) // 447
