// 問題URL
// https://atcoder.jp/contests/abc165/tasks/abc165_b

function onePersent(X: number) {
  let moneyInPossession = 100;
  let yearCount = 0;
  const INTERREST_RATE = 0.01;

  // 預金にに0.01をかけたものを現在の預金に足す行為をXになるまで繰り返す
  while (moneyInPossession <= X) {
    let interest = Math.floor(moneyInPossession * INTERREST_RATE);
    moneyInPossession += interest;
    yearCount++;
    // ここで判定を挟んでおかないと答えにプラス１された値が出力される
    if (moneyInPossession >= X) {
      break;
    }
  }

  console.log(yearCount);
}

onePersent(103); // 3
onePersent(1000000000000000000); // 3760
onePersent(1333333333); // 1706
